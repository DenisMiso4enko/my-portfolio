import "./App.scss";
import Header from "./components/Header/Header";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Suspense fallback="">
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
