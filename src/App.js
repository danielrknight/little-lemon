import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Nav />
      </div>
      <main>
        <section className="hero">Hero</section>
        <section className="highlights">Highlights</section>
        <section className="testimonials">Testimonials</section>
        <section className="about">About</section>
      </main>
      <Footer />
    </>
  );
}

export default App;
