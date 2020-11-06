import React from "react";
import Button from "@material-ui/core/Button";
export default function Home() {
  return (
    <div>
      <div className="container">
        <header>
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="#">
              <img src="Vasiti-Logo-black.png" alt="brand logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto" id="focused">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    STORIES
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    LOG IN
                  </a>
                </li>
                <button class=" btn  my-2 my-sm-0" id="text-white">
                  SIGN UP
                </button>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <main>
        <hr />
        <div className="container">
          <div className="header-link" id="link-header">
            <div class="row justify-content-md-center">
              <div class="col col-sm-4 col-lg-2">
                <a href="#">MARKETPLACE</a>
              </div>
              <div class="col col-sm-4 col-lg-2">
                <a href="#">WHOLESALE CENTER</a>
              </div>
              <div class="col col-sm-4 col-lg-2">
                <a href="#">SELLER CENTER</a>
              </div>
              <div class="col col-sm-4 col-lg-2">
                <a href="#">SERVICES</a>
              </div>
              <div class="col col-sm-4 col-lg-2">
                <a href="#">INTERNSHIPS</a>
              </div>
              <div class="col col-sm-4 col-lg-2">
                <a href="#">EVENTS</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <section>
            <div class="row">
              <div class="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <h1>
                  Amazing
                  <br /> Experiences from Our
                  <br /> Wonderful Customers
                </h1>
                <br />
                <p>
                  Here is what customers and vendors are saying about us,
                  <br /> you can share your stories with us too.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src="Testimonial-image.png"
                  alt="hero"
                  width="536px"
                  height="568px"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="dark-bg">
          <div className="container">
            <div class="row">
              <div class="col-lg-6 jcol-mr-auto">
                <img
                  src="black-beautiful-ladies.png"
                  alt="hero"
                  width="500px"
                  height="480px"
                />
              </div>
              <div class="col-lg-6 col-ml-auto">
                <br />
                <br />
                <br />
                <h2>Tolu & Joy’s Experience</h2>
                <Button variant="outlined" id="btn-white">
                  CUSTOMER
                </Button>
                <p>
                  <br />
                  I had the best experience shopping with vasiti.
                  <br />
                  Usability of the website was great, very good
                  <br />
                  customer service, an all round great
                  <br />
                  experience. I would definately be coming back!
                  <br />
                  I had the best experience shopping with vasiti.
                  <br />
                  Usability of the website was great, very good
                  <br />
                  customer service, an all round great
                  <br />
                  experience. I would definately be coming back!
                </p>
                <br />
                <br />
                <p className="text-underline">SHARE YOUR OWN STORY!</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div class="row justify-content-center">
              <div class="col-6 col-lg-4">
                <img src="" alt="" />
                <p>
                  <span></span>
                </p>
                <p></p>
              </div>
              <div class="col-6 col-lg-4">2 of 3 </div>
              <div class="col-6 col-lg-4">3 of 3</div>
              <div class="col-6 col-lg-4">3 of 3</div>
              <div class="col-6 col-lg-4">3 of 3</div>
              <div class="col-6 col-lg-4">3 of 3</div>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col">
              <h1>Experts to Help You Cross Every Hurdle</h1>
              <p></p>
              <button class=" btn btn-warning my-2 my-sm-0" id="text-white">
                About All Experts
              </button>
            </div>
            <div class="col-md-auto">
              <img src="../images/hero-img.jpg" alt="hero" />
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
