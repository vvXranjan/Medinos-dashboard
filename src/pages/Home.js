import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to Medinos</h1>
      <p className="text-lg mb-8 text-gray-600">Click below to access Retail Master Dashboard</p>
      <Link
        to="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
      >
        Retail Master
      </Link>
    </div>
  );
};

export default Home;
