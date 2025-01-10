import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StatusList from './components/StatusList';

function App() {
  const [statusData, setStatusData] = useState([]);

  const fetchStatus = async () => {
    try {
      const componentsResponse = await fetch('https://www.githubstatus.com/api/v2/components.json');
      const componentsData = await componentsResponse.json();
      setStatusData(componentsData.components);
    } catch (error) {
      console.error('Erro ao buscar o status:', error);
    }
  };

  return (
    <div className="app">
      <Header onFetchStatus={fetchStatus} />
      <StatusList statusData={statusData} />
    </div>
  );
}

export default App;