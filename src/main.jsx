import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Vedran Djakovic — UX Portfolio</h1>
      <p>Site is up! We’ll add projects and styling next.</p>
      <p style={{ marginTop: 12 }}>
        Contact: <a href="mailto:vedran.djakovic@outlook.com">vedran.djakovic@outlook.com</a> · 425-647-6531
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
