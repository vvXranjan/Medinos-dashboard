const MetricCard = ({ title, value, bg = 'bg-blue-600' }) => {
  return (
    <div className={`p-4 rounded-xl shadow-md text-white ${bg}`}>
      <div className="text-sm">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
};

export default MetricCard;
