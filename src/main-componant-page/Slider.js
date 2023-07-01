let Slider = () => {
  return (
    <div>
      <h2 className="text-center text-danger" style={{ marginTop: "40px" }}>
        Learn More About Flowers
      </h2>
      <div
        id="carouselExampleCaptions"
        class="carousel slide container "
        data-bs-ride="carousel"
        style={{
          width: "60%",
          margin: "60px auto",
          backgroundColor: "#829ba7",
          height: "35em",
        }}
      >
        <div class="carousel-indicators container">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="11"
            aria-label="Slide 12"
          ></button>
        </div>
        <div class="carousel-inner ">
          {/* 1 */}
          <div class="carousel-item active ">
            <div className="slider-pic ">
              <img
                src={require("../images/f1.png").default}
                class="d-block w-100"
                alt="	
Roses Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block ">
              <h5>Roses Flower</h5>
              <p>The roses are most often seen as garden plants..</p>
            </div>
          </div>
          {/* 2 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f2.png").default}
                class="d-block w-100"
                alt="Peony Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Peony Flower</h5>
              <p>
                Peony flowers are perennials. The plant itself stands up to 1.5
                meters tall.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f3.png").default}
                class="d-block w-100"
                alt="colorful flowers"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>colorful flowers</h5>
              <p>
                Flowers come in all different types of shades, we love seeing a
                lot of the colorful flowers .
              </p>
            </div>
          </div>
          {/* 4 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f4.png").default}
                class="d-block w-100"
                alt="Azalea Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Azalea Flower</h5>
              <p>
                Azaleas are flowers that grow on bushes belonging to the class
                of plants called rhododendrons.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f5.png").default}
                class="d-block w-100"
                alt="Carnation Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Carnation Flower</h5>
              <p>
                Carnation flowers can be red, pink, white, purple, green and
                more..
              </p>
            </div>
          </div>
          {/* 6 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f6.png").default}
                class="d-block w-100"
                alt="Water Lily Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Water Lily Flower</h5>
              <p>
                The water lily has been an important flower in the many cultures
                that make up the world.
              </p>
            </div>
          </div>
          {/* 7 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f7.png").default}
                class="d-block w-100"
                alt=" Aster Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5> Aster Flower</h5>
              <p>
                The aster flower is the birth flower for the month of September.
              </p>
            </div>
          </div>
          {/* 8 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f8.png").default}
                class="d-block w-100"
                alt="Sunflower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Sunflower</h5>
              <p>
                The sunflower is a living annual plant in the family Asteraceae,
                with a large flower.
              </p>
            </div>
          </div>
          {/* 9 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f9.png").default}
                class="d-block w-100"
                alt="Daffodil Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Daffodil Flower</h5>
              <p>Wordsworth understood the unique quality of this.</p>
            </div>
          </div>
          {/* 10 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f10.png").default}
                class="d-block w-100"
                alt="Azalea Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Azalea Flower</h5>
              <p>
                Azaleas are flowers that grow on bushes belonging to the class
                of plants.
              </p>
            </div>
          </div>
          {/* 11 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f11.png").default}
                class="d-block w-100"
                alt="Tulip Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Tulip Flower</h5>
              <p>
                {" "}
                Tulip Festival held in both Ottawa and Gatineau exhibit more
                than one million.
              </p>
            </div>
          </div>
          {/* 12 */}
          <div class="carousel-item">
            <div className="slider-pic">
              <img
                src={require("../images/f12.png").default}
                class="d-block w-100"
                alt="Marigold Flower"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Marigold Flower</h5>
              <p>
                Marigolds are one of the most beautiful flowers in the plant
                kingdom.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark "
            aria-hidden="true"
          ></span>
          <span class="visually-hidden ">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
