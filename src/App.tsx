import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] antialiased">
      <Navbar />
      <main className="w-full">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;