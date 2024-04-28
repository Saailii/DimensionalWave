import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";
import Talking from "./components/Talking";

function App() {
  return (
    <>
      <div className="h-screen">
        <Nav />
        <HeroBanner />
        <Talking />
      </div>
    </>
  );
}

export default App;
