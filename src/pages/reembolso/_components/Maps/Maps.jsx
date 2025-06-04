import { useState } from 'react';
import styles from './Maps.module.scss';

export default function Maps({ isOpen, onClose, onDistanceCalculated }) {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState(null);
  const [erro, setErro] = useState('');

  if (!isOpen) return null;

  async function buscarCoordenadas(endereco) {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json`);
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    }
    return null;
  }

  function calcularHaversine(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = (g) => (g * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return +(R * c).toFixed(2);
  }

  async function handleCalcular() {
    setErro('');
    try {
      const coordOrigem = await buscarCoordenadas(origem);
      const coordDestino = await buscarCoordenadas(destino);

      if (!coordOrigem || !coordDestino) {
        setErro('Endereço não encontrado.');
        return;
      }

      const dist = calcularHaversine(coordOrigem.lat, coordOrigem.lon, coordDestino.lat, coordDestino.lon);
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
