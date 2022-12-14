import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
    <Header />
    <main className="py-3">
        <Container>
        <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
        </Container>
    </main>
    <Footer />
    </div>
  );
}

export default App;