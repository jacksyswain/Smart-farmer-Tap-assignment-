import './HeaderSection.css';

export default function HeaderSection({ onGetWeather }) {
  return (
    <div className="section text-center">
      <h1>WeatherSmart Farmer</h1>
      <p>Get real-time weather insights for your farm.</p>
      <button className="weather-btn" onClick={onGetWeather}>
        <i className="fas fa-cloud-sun"></i> Get Current Weather
      </button>
    </div>
  );
}
