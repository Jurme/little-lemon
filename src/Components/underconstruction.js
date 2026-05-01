import '../App.css';

function UnderConstruction() {
  return (
    <div className="construction-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1>🚧 Under Construction</h1>
      <p>This page is currently being built.</p>
      <p>Please check back soon.</p>
    </div>
  );
}

export default UnderConstruction;