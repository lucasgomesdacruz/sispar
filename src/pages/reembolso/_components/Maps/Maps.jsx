import { useState } from 'react';
import styles from './Maps.module.scss';

export default function Maps({ isOpen, onClose, onDistanceCalculated }) {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState(null);
  const [erro, setErro] = useState('');

  const API_KEY = import.meta.env.VITE_ORS_API_KEY;

  if (!isOpen) return null;

  async function buscarCoordenadas(endereco) {
    const response = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(endereco)}`
    );
    const data = await response.json();
    if (data?.features?.length > 0) {
      const [lon, lat] = data.features[0].geometry.coordinates;
      return { lat, lon };
    }
    return null;
  }

  async function calcularDistanciaReal(origemCoords, destinoCoords) {
    const body = {
      coordinates: [
        [origemCoords.lon, origemCoords.lat],
        [destinoCoords.lon, destinoCoords.lat],
      ],
    };

    const response = await fetch('https://api.openrouteservice.org/v2/directions/driving-car', {
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data?.routes?.length > 0) {
      const distanciaKm = data.routes[0].summary.distance / 1000;
      return distanciaKm.toFixed(2);
    }

    throw new Error('Não foi possível calcular a distância.');
  }

  async function handleCalcular() {
    setErro('');
    setDistancia(null);

    try {
      const coordOrigem = await buscarCoordenadas(origem);
      const coordDestino = await buscarCoordenadas(destino);

      if (!coordOrigem || !coordDestino) {
        setErro('Endereço não encontrado.');
        return;
      }

      const dist = await calcularDistanciaReal(coordOrigem, coordDestino);
      setDistancia(dist);
    } catch (err) {
      setErro('Erro ao calcular distância.');
    }
  }

  function aplicarDistancia() {
    if (distancia) {
      onDistanceCalculated(distancia);
      onClose();
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Calcular distância</h2>
        <input
          type="text"
          placeholder="Endereço de origem"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço de destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
        <button onClick={handleCalcular}>Calcular</button>

        {erro && <p className={styles.error}>{erro}</p>}
        {distancia !== null && (
          <div className={styles.result}>
            <p>Distância: <strong>{distancia} km</strong></p>
            <button className={styles.applyBtn} onClick={aplicarDistancia}>Usar essa distância</button>
          </div>
        )}

        <button className={styles.closeBtn} onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
