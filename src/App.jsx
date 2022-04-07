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

      <nav class="container navbar navbar-expand-lg navbar-dark mt-2 mb-2">
        <div class="container-fluid">
          <img
            height="40"
            src="https://cdn-icons.flaticon.com/png/512/2314/premium/2314736.png?token=exp=1648135391~hmac=1a98b23eb01289550e8b01b500e68ad5"
            alt=""
          />
          <a className="navbar-brand ps-3 fw-bold" href="#">
            ANIME OP
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <section>
        <div
          id="carouselExampleControls"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner text-center">
            <div class="carousel-item active">
              <img
                src="https://pm1.narvii.com/6537/d02fdb3a342941e4e20f17232d28cf12df74a2a0_hq.jpg"
                class="w-75 rounded shadow"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg"
                class="w-75 rounded shadow"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://wallpaperboat.com/wp-content/uploads/2019/06/cute-anime-9.jpg"
                class="w-75 rounded shadow"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <br />

      <section class="card m-4 pb-3 bg-light shadow-lg">
        <h1 class="text-center pt-4 mt-3">TOP ANIME</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 m-3">
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/articulo_760x422/public/2022-02/animes.jpg?itok=QtGkbBA2"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://www.cinepremiere.com.mx/wp-content/uploads/2021/03/Anime-Invierno-2021.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeV0Af4XqVIi8qSUEeV_llbkH9B-TyiTGukOX7pSFxAuAyoc9q-e--ErSFvK4dLjE7tYDAr1L0PXAja28cDsLWwGdA_A.jpg?r=43c"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/07/19/anime-ecchi.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper-4k-1024x576.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://wallpaperaccess.com/full/6319354.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section class="bg-light m-4 rounded shadow-lg">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner rounded">
            <div class="carousel-item rounded active" data-bs-interval="10000">
              <img
                src="https://img.wallpapersafari.com/desktop/1680/1050/80/72/eC3s8U.jpg"
                class="d-block w-100 rounded"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="https://media.vandalsports.com/master/6-2021/2021621144810_1.jpg"
                class="d-block w-100 rounded"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://as01.epimg.net/meristation/imagenes/2022/01/02/reportajes/1641116925_665384_1641988179_noticia_normal.jpg"
                class="d-block w-100 rounded"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <br />

      <section class="card m-4 pb-3 bg-light shadow">
        <h1 class="text-center pt-4 mt-3">TOP MANGA</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 m-3">
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://www.educaciontrespuntocero.com/wp-content/uploads/2021/01/naruto.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://www.xtrafondos.com/wallpapers/resized/chica-anime-pensando-4699.jpg?s=large"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://depor.com/resizer/Db1KCgVkVR6-TZU6FPEMEGQaqqo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4JOY2YG6VRA4DKLNGPJKBP7F5U.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://www.enter.co/wp-content/uploads/2019/01/01-768x432.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXfx3lsa8vace9SDMba_PcWLlNvj28uHnLQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-lg h-100">
              <img
                src="https://ramenparados.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-21-at-18.26.24-1-1000x600-1632243522.jpeg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section class="container text-center">
        <div class="bg-light p-4 shadow-lg rounded">
          <h2 class="py-3">Sono - Episodio 11</h2>
          <iframe
            class="border border-dark rounded bg-dark shadow-lg ratio ratio-16x9"
            src="https://mega.nz/embed/P9EHgZbC#2EqinvBPnZVLnOljikAfXYTognci811MFhpc845VLxQ"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <br />
    </div>
  );
}

export default App;
