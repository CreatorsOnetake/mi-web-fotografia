export default function Home() {
  return (
    <div className="fullscreen-container">
      {/* Contenido largo */}
      <div style={{ height: "550vh", background: "rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <p></p>

        {/* Botón dentro del flujo del contenido */}
        <button 
          className="portfolio-button" 
          onClick={() => window.location.href = "https://linktr.ee/Frankrivas"}
        >
          NUESTRO PORTAFOLIO
        </button>
      </div>
    </div>
  );
}
