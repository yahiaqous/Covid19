/** @format */

import Header from './components/Header';
import Home from './main_pages/Home';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#04061c',
        color: 'white',
      }}>
      {/* Header */}
      <Header />

      {/* Home Page */}
      <Home />
    </div>
  );
}

export default App;
