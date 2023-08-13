import { Explore, Features, Footer, Hero, Navbar } from './components';

const App = () => {
  return (
    <div className="font-body min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
