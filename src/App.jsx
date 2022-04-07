import { useState } from "react";

function App() {

  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (event) => {
    // setInputState({
    //   titulo: event.target.value,
    //   fecha: "",
    //   nota: "",
    // });
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetChange = () => {
    setInputState({
      ...inputState,
    titulo: "", 
    fecha: "", 
    nota: ""
  });
  };

  return (
    <div className="App">
      <div className="container-sm mx-auto card m-4 p-3 bg-light shadow">
        <h3>Notas</h3>
        <label htmlFor="titulo">Input de Titulo</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          onChange={handleInputChange}
          value={inputState.titulo}
        />
        <br />
        <label htmlFor="fecha">Input de Fecha</label>
        <input
          type="text"
          id="fecha"
          name="fecha"
          onChange={handleInputChange}
          value={inputState.fecha}
        />
        <br />
        <label htmlFor="nota">Input de Nota</label>
        <input
          type="text"
          id="nota"
          name="nota"
          onChange={handleInputChange}
          value={inputState.nota}
        />
        <br />
        <button onClick={handleResetChange} className="btn btn-dark" type="button">
          Limpiar
        </button>
      </div>

    </div>
  );
}

export default App;
