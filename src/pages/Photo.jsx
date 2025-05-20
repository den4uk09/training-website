import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Photo() {
  const images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSSWyfP6P1Cj5h8uCD9CvNS6U4J5qUZYLHPl5tjiVBIB9ALwE2melrfE6Jsm', alt: 'Їжак на траві' },
    { src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-CeVeHT8kV4CcGkj6V__d6NkOBA7NhwgMh5m2pdGi-oocNa9xLy9so-nPHLpF', alt: 'Їжак шукає їжу' },
    { src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_H3_sNu0jr5uhxp1Tu_APT6axBRGZkjqsqimTqeM0CriRsSa0QMOLCiER7_GL', alt: 'Сплячий їжак' },
    { src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSM2CzeIunXmrTZ8KkQ4inZbV3BWe9ZvjFDBnIL6x0SXNu55ILCLbYn2ClK21NU', alt: 'Їжаченята' },
    { src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiZ0P-CNG5vTR1foQj-JRW70IQZotZfaQMo5aQCMsp50WaoTX5zq5Ev4tiGES3', alt: 'Їжак у лісі' },
    { src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0molPs9G5Ne92nU3l1Mym0S2FS3sHS8yXw_UU4d87voPqnZNoHDieR0HUIYfH', alt: 'Їжак близько' }
  ];

  return (
    <main className="container px-4 py-4 flex-grow-1">
      <article>
        <h2 className="h2 text-success mb-4">Фотогалерея їжаків</h2>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <a href={image.src} target="_blank" rel="noopener noreferrer">
                  <img src={image.src} className="d-block w-100" alt={image.alt} />
                </a>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
    </main>
  );
}

export default Photo;