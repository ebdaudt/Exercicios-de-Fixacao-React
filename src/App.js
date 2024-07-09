// src/App.js
import React, { useContext, useEffect } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import './theme.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      Alternar para o tema {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Aplicação de Alternância de Tema</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
