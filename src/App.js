import "./App.css";
import Header from "./HomePage/Header";
import Navigation from "./HomePage/Nav";
import Footer from "./HomePage/Footer";
import Router from "./Router";

function App() {
  return (
    <>
      <Navigation />
      <Router />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      <Header />



      <Footer />
    </>

  );
}

export default App;
