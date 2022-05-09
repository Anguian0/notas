import { useState } from "react";

function App() {
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  const handleInputChange = (event) => {
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
      nota: "",
    });
  };

  const handleResetNotas = () => {
    setNotas([]);
    localStorage.setItem("notas", JSON.stringify([]));
  };

  const handleClickGuardar = () => {
    setNotas([...notas, inputState]);
    localStorage.setItem("notas", JSON.stringify(notas));
    handleResetChange();
  };

  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];

    notas.forEach((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas([...nuevoArreglo]);
  };

  return (
    <div className="App container">
      <div className="row bg-light p-3 rounded m-3">
        <div className="col p-4">
          <h3 className="text-center">
            <i class="bi bi-card-list"></i> Lista
          </h3>
          {notas.length === 0 ? (
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo."
          ) : (
            <ol>
              {notas.map((item, index) => {
                return (
                  <li key={index}>
                    {item.titulo} ({item.fecha})
                    <i
                      class="bi bi-x-circle mx-2"
                      onClick={() => handleBorrarNota(index)}
                      style={{
                        color: "red",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                      }}
                    ></i>
                  </li>
                );
              })}
            </ol>
          )}
          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <div className="row mx-1">
                <button
                  onClick={handleResetNotas}
                  className="btn btn-outline-dark shadow"
                  type="button"
                  disabled={notas.length === 0}
                >
                  <i class="bi bi-x-circle"></i> Borrar lista
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {arregloNotas.length !== 0 && (
            <ol>
              {arregloNotas.map((item) => {
                return (
                  <li>
                    {item.titulo} ({item.fecha})
                  </li>
                );
              })}
            </ol>
          )} */}
        <div className="col mx-auto bg-light p-4">
          <h3 className="text-center">
            <i class="bi bi-card-text"></i> Notas
          </h3>
          <label style={{ width: "100%" }} htmlFor="titulo">
            <i class="bi bi-pencil-square mx-2"></i>Título
            <input
              className="m-2"
              type="text"
              id="titulo"
              name="titulo"
              onChange={handleInputChange}
              value={inputState.titulo}
              style={{ width: "100%" }}
            />
          </label>

          <br />
          <label style={{ width: "100%" }} htmlFor="fecha">
            <i class="bi bi-calendar-week mx-2"></i>Fecha
            <input
              className="m-2"
              type="date"
              id="fecha"
              name="fecha"
              onChange={handleInputChange}
              value={inputState.fecha}
              style={{ width: "100%" }}
            />
          </label>

          <br />
          <label style={{ width: "100%" }} htmlFor="nota">
            <i class="bi bi-body-text mx-2"></i>Nota
            <textarea
              className="m-2"
              id="nota"
              name="nota"
              onChange={handleInputChange}
              value={inputState.nota}
              style={{ width: "100%" }}
            />
          </label>
          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <div className="row mx-1">
                <button
                  onClick={handleResetChange}
                  className="btn btn-outline-dark shadow"
                  type="button"
                  disabled={
                    inputState.titulo === "" ||
                    inputState.fecha === "" ||
                    inputState.nota === ""
                  }
                >
                  <i class="bi bi-x-circle"></i> Limpiar
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row mx-1">
                <button
                  onClick={handleClickGuardar}
                  className="btn btn-outline-primary shadow"
                  type="button"
                  disabled={
                    inputState.titulo === "" ||
                    inputState.fecha === "" ||
                    inputState.nota === ""
                  }
                >
                  <i class="bi bi-check-circle"></i> Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
