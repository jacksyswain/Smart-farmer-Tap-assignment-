import './RecommendationSection.css';

export default function RecommendationSection({ data }) {
  const { temp, rainfall } = data.current;

  const irrigation =
    rainfall > 10 ? 'No irrigation needed.' :
    rainfall > 5 ? 'Reduce irrigation.' :
    rainfall > 0 ? 'Light irrigation.' : 'Full irrigation recommended.';

  const rainfallImpact =
    rainfall > 8 ? 'Risk of waterlogging.' :
    rainfall > 2 ? 'Good moisture condition.' :
    'Dry soil, consider watering.';

  const tempAlert =
    temp > 30 ? 'High heat alert!' :
    temp < 5 ? 'Possible frost risk!' :
    'Temperature is optimal.';

  return (
    <div className="section">
      <h2>Farming Recommendations</h2>
      <div>{irrigation}</div>
      <div>{rainfallImpact}</div>
      <div>{tempAlert}</div>
    </div>
  );
}
