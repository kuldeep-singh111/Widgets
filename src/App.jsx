import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Header onSearch={setSearchQuery} />
      <Dashboard searchQuery={searchQuery} />
    </div>
  );
}

export default App;
