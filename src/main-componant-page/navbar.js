import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/HomerPage" class="navbar-brand text-warning ">
            Flowershop
          </Link>
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
                <Link
                  to="/HomerPage"
                  class="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/SliderPage" class="nav-link">
                  Slider
                </Link>
              </li>
              <li>
                <Link to="/CardPage" class="nav-link ">
                  My Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/AboutUSPage" class="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ContactUSPage" class="nav-link ">
                  Contact US
                </Link>
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
                  More..
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="nav-item">
                    <Link
                      to="/LogingPage"
                      class="dropdown-item"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/RegisterPage" class="dropdown-item">
                      Register
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
