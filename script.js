function guardarNota() {
    const nota = document.getElementById("nota").value;
    localStorage.setItem("notaRayniel", nota);
    mostrarNota();
  }
  
  function mostrarNota() {
    const nota = localStorage.getItem("notaRayniel");
    document.getElementById("notaGuardada").textContent = nota || "Aún no has guardado una nota.";
  }
  
  window.onload = mostrarNota;
  