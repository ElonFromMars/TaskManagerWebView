import React, { useState, useEffect } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/user/0');
        const data = await response.json();
        setApiData(data); // Update the state with API data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Awesome App</h1>
      {apiData ? (
        // Render your data here, adjust based on your DTO structure
        <div>
          <p>Data from API:</p>
          <p>{apiData.name}</p>
          {/* Add more properties as needed */}
        </div>
      ) : (
        // Show a loading spinner or message while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
