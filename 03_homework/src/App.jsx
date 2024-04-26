import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <NavbarHeader />

      <section className="section-carousel mt-4">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1609253925210-c64083102ae5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="sectionThink">
        <div className="thinkHead">
          <h1 className="text-white">Think Health. Think Massage.</h1>
        </div>
        <div className="thinkPara w-4/5 py-4 text-center">
          <p className="px-12 font-bold text-lg">
            We are open 9am to 6pm; Monday through Sunday. If you would like to
            schedule an appointment with us, please call us at 987-654-3210
            today!
          </p>
        </div>
        <div className="info w-full py-4 flex justify-center gap-4">
          <div className="btn">
            <a href="#">
              <span className="text-white">LEARN MORE ABOUT US</span>
            </a>
          </div>
          <div className="btn">
            <a href="#">
              <span className="text-white">CONTACT US TODAY</span>
            </a>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" className="sectionPara py-10 pr-4">
        <div className="clrPink">
          <p>
            Are you looking for a professional, registered massage therapist?
            Sample Massage Therapy has 4 registered massage therapists who can
            provide clinical massage.
          </p>
          <br />
          <p>
            We are committed to your long term health and well-being. Our
            multi-disciplinary clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>
          <br />
          <p>
            We welcome you to come explore all the benefits you’ll enjoy as one
            of our valued guests. Our professional staff is committed to
            offering the best massage therapy in Mainland.
          </p>
        </div>
      </div>
      <hr />
      <div data-aos="fade-up" className="sectionDetails py-10 pr-4">
        <div className="clrPink">
          <p>Family Wellness Massage Therapy</p>
          <p>888 Griffiths Way, Mainland ML 12345</p>
          <p>Tel: 987.654.3210</p>
          <p>Email: info@yoursite.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
