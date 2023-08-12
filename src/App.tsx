import { Navbar, Hero, Features, Explore, Footer } from './components';

const App = () => {
  return(
    <>
      <Navbar />
      <main> 
        <Hero />
        <Features />
        <Explore />
      </main>
      <Footer />
    </>
  );
};

export default App;
