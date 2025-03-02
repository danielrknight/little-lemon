import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <section id="hero"></section>
        <section id="highlights"></section>
        <section id="testimonials"></section>
        <section id="about"></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
