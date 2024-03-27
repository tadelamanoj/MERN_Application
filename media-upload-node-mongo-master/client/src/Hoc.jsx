import React, { useState, useEffect } from 'react';

// Higher Order Component for adding loading spinner functionality
const withLoadingSpinner = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulating an asynchronous operation (e.g., fetching data)
      const fetchData = async () => {
        try {
          // Simulate a delay (e.g., fetching data from an API)
          await new Promise(resolve => setTimeout(resolve, 2000));
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    if (isLoading) {
      return <p>Loading...</p>; // Render a loading message or spinner
    }

    return <WrappedComponent {...props} />;
  };
};

// Component that will be enhanced with the loading spinner HOC
const DataComponent = () => {
  // Simulating the data fetched from an API
  const data = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h2>Data Component</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Enhance the component using the loading spinner HOC
const EnhancedDataComponent = withLoadingSpinner(DataComponent);

// App component where you use the enhanced component
const Hoc = () => {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <EnhancedDataComponent />
    </div>
  );
};

export default Hoc;
