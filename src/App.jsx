import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import HeaderSection from './components/HeaderSection';
import WeatherDashboard from './components/WeatherDashboard';
import RecommendationSection from './components/RecommendationSection';
import Footer from './components/Footer';
import mockWeatherData from './data/mockWeatherData';
import './styles.css';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [networkType, setNetworkType] = useState('');
  const recommendationRef = useRef(null);

  // 🌍 Detect farmer's location using Geolocation API
  const handleDetectFarm = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    }
  };

  // ☁️ Load mock weather data (could be replaced with real API)
  const handleWeatherClick = () => {
    setWeather(mockWeatherData);
  };

  // 📶 Detect network type using Network Information API
  useEffect(() => {
    const connection =
      navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    if (connection) {
      setNetworkType(connection.effectiveType);
    }
  }, []);

  // 👁️‍🗨️ Fade in recommendation section when visible using Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const target = recommendationRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [weather]);

  return (
    <div className="bg-gradient-to-b from-green-50 to-blue-50 min-h-screen">
      <Navbar onDetectFarm={handleDetectFarm} />
      <div className="container" style={{ minHeight: 'calc(100vh - 68px)' }}>
        <HeroImage />
        <HeaderSection onGetWeather={handleWeatherClick} />

        {/* Show network and location info as soon as available */}
        <div className="api-info">
          {networkType && <p>📶 Network: {networkType}</p>}
          {location && (
            <p>
              📍 Farmer Location: {location.lat.toFixed(2)}, {location.lon.toFixed(2)}
            </p>
          )}
        </div>

        {/* Show weather dashboard and recommendations only after weather is fetched */}
        {weather && (
          <div className="weather-section">
            <WeatherDashboard data={weather} />
            <div ref={recommendationRef}>
              <RecommendationSection data={weather} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
