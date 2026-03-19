import React, { useState, useEffect } from 'react';

// Home component demonstrates best practices for performance optimization
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        const response = await new Promise(resolve =>
          setTimeout(() => resolve({ data: { title: 'Welcome to the Optimized React App' } }), 300)
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
      <h1>{data?.title}</h1>
      <p>This page uses optimized loading patterns.</p>
    </div>
  );
};

export default Home;
