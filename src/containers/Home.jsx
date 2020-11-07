import React from "react";
import Button from "@material-ui/core/Button";
export default function Home() {
  return (
    <div>
      <div className="container font-roboto">
        <header>
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="#Home">
              <img src="images/Vasiti-Logo-black.jpg" alt="brand logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto" id="focused">
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    STORIES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    CONTACT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    LOG IN
                  </a>
                </li>
                <button className=" btn  my-2 my-sm-0" id="text-white">
                  SIGN UP
                </button>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <main>
        <hr />
        <div className="container font-roboto">
          <div className="header-link" id="link-header">
            <div className="row">
              <div className="col col-sm-4 col-lg-2 links">
                <a href="#Home">MARKETPLACE</a>
              </div>
              <div className="col-12 col-sm-4 col-lg-2 links">
                <a href="#Home">WHOLESALE CENTER</a>
              </div>
              <div className="col-12 col-sm-4 col-lg-2 links">
                <a href="#Home">SELLER CENTER</a>
              </div>
              <div className="col-12 col-sm-4 col-lg-2 links">
                <a href="#Home">SERVICES</a>
              </div>
              <div className="col-12 col-sm-4 col-lg-2 links">
                <a href="#Home">INTERNSHIPS</a>
              </div>
              <div className="col-12 col-sm-4 col-lg-2 links">
                <a href="#Home">EVENTS</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <section>
            <div className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-6 ">
                <img
                  src="images/Testimonial-image.jpg"
                  alt="hero"
                  width="100%"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="images/black-beautiful-ladies.png"
                  alt="hero"
                  width="100%"
                />
              </div>
              <div className="col-lg-6">
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
                <br />
              </div>
            </div>
          </div>
        </section>
        <section>
          <br />
          <br />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse1.jpg" alt="customer" />
                <h5>Joseph Ike</h5>
                <ul className="customer">
                  <li>In Ikeja</li>
                  <li>
                    <Button variant="outlined" className="btn-blue">
                      CUSTOMER
                    </Button>
                  </li>
                </ul>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse2.jpg" alt="customer" />
                <h5>Adetola Fashina</h5>
                <ul className="customer">
                  <li>Ibadan</li>
                  <li>
                    <Button variant="outlined" className="btn-blue">
                      CUSTOMER
                    </Button>
                  </li>
                </ul>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse3.jpg" alt="customer" />
                <h5>Emmanuel Fayemi</h5>
                <ul className="customer">
                  <li>In Akoka</li>
                  <li>
                    <Button variant="outlined" className="btn-blue">
                      CUSTOMER
                    </Button>
                  </li>
                </ul>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse4.jpg" alt="vendor" />
                <h5>Chisom Obilor</h5>
                <ul className="customer">
                  <li>In Magodo</li>
                  <li>
                    <Button variant="outlined" className="btn-green">
                      VENDOR
                    </Button>
                  </li>
                </ul>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse5.jpg" alt="vendor" />
                <h5>Adunoluwa Adeyemi</h5>
                <ul className="customer">
                  <li>Iwo Road</li>
                  <li>
                    <Button variant="outlined" className="btn-green">
                      VENDOR
                    </Button>
                  </li>
                </ul>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse6.jpg" alt="vendor" />
                <h5>Chidi Okeke</h5>
                <ul className="customer">
                  <li>In Somolu</li>
                  <li>
                    <Button variant="outlined" className="btn-green">
                      VENDOR
                    </Button>
                  </li>
                </ul>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pink-bg">
          <br />
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <br />
                <br />
                <br />
                <h2>Josiah's Experience</h2>
                <Button variant="outlined" id="btn-orange">
                  VENDOR
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
                <p className="text-underline text-orange">
                  SHARE YOUR OWN STORY!
                </p>
                <br />
              </div>
              <div className="col-12 col-lg-6">
                <img src="images/woman-shoppingbag.png" alt="hero" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse7.png" alt="vendor" />
                <h5>Temi Obadofin</h5>
                <Button variant="outlined" className="btn-green">
                  VENDOR
                </Button>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse8.png" alt="vendor" />
                <h5>Promise Ejiofor</h5>
                <Button variant="outlined" className="btn-green">
                  VENDOR
                </Button>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse9.png" alt="vendor" />
                <h5>Feyisola Arinola</h5>
                <Button variant="outlined" className="btn-green">
                  VENDOR
                </Button>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse10.png" alt="vendor" />
                <h5>Karen Ibeh</h5>
                <Button variant="outlined" className="btn-green">
                  VENDOR
                </Button>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse11.png" alt="vendor" />
                <h5>Oluchi Uzo</h5>
                <Button variant="outlined" className="btn-green">
                  VENDOR
                </Button>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <img src="images/Ellipse12.png" alt="vendor" />
                <h5>Amos Okafor</h5>
                <Button variant="outlined" className="btn-green">
                  VENDOR
                </Button>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Aliqua id
                  fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                  esse pariatur duis deserunt mollit dolore cillum minim tempor
                  enim.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img src="images/subscribe-banner.png" alt="" />
            </div>
            <div className="col-12 col-lg-6"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
