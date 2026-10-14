import React, { useState } from 'react';
import NewPostPage from './NewPostPage'; // adjust path if inside src/components
import './App.css'; // or your navbar css

function App() {
  // 'home' displays the landing page, 'post' displays the new post form
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      {/* Top DEV@Deakin Navigation Bar */}
      <header className="navbar" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        backgroundColor: '#e9ecef',
        borderBottom: '1px solid #ced4da'
      }}>
        <div 
          style={{ fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}
          onClick={() => setCurrentPage('home')}
        >
          DEV@Deakin
        </div>

        <input 
          type="text" 
          placeholder="Search..." 
          style={{ padding: '6px 12px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span 
            style={{ 
              cursor: 'pointer', 
              fontWeight: currentPage === 'post' ? 'bold' : 'normal',
              color: '#000'
            }}
            onClick={() => setCurrentPage('post')}
          >
            Post
          </span>
          <span style={{ cursor: 'pointer', color: '#000' }}>
            Login
          </span>
        </div>
      </header>

      {/* Main Content Area: Conditional View */}
      <main style={{ minHeight: '70vh', padding: '20px' }}>
        {currentPage === 'home' && (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Welcome to DEV@Deakin</h2>
            <p>Your secure frontend web platform.</p>
          </div>
        )}

        {currentPage === 'post' && (
          <NewPostPage />
        )}
      </main>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '24px',
        backgroundColor: '#e9ecef',
        borderTop: '1px solid #ced4da',
        marginTop: 'auto'
      }}>
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Stay Connected</h4>
          <p>DEV@Deakin Community</p>
        </div>
      </footer>
    </div>
  );
}

export default App;