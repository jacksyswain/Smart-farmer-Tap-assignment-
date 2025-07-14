import './WeatherDashboard.css';

export default function WeatherDashboard({ data }) {
  const { current } = data;

  return (
    
    <div className="dashboard">
      <h2>{data.location}</h2>
      <div className="dashboard-main">
        <div className="temp">{Math.round(current.temp)}°</div>
        <div>
          <div className="condition">{current.condition}</div>
          <div className="date">{new Date().toLocaleDateString()}</div>
        </div>
      </div>
      <div className="dashboard-stats">
        <div>
          <p>Humidity</p>
          <strong>{current.humidity}%</strong>
        </div>
        <div>
          <p>Rainfall</p>
          <strong>{current.rainfall}mm</strong>
        </div>
      </div>
    </div>
    
  );
}
