/** @format */

import Header from './components/Header';
import Home from './main_pages/Home';
import Footer from './components/Footer';

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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
