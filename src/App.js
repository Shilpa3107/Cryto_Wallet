// src/App.js
import React from 'react';
import WalletConnect from './components/WalletConnect';
import './App.css'; // If you have a CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Wallet Connection</h1>
        <WalletConnect />
      </header>
    </div>
  );
}

export default App;
