import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavComponent from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Qualities from "./components/qualities/Qualities";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <NavComponent />
      <Hero />
      <About />
      <Pricing />
      <Services />
      <Qualities />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
