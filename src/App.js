import { Outlet } from "react-router-dom";
import { AllProvider } from "./context/AllContext";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <AllProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </AllProvider>
    </div>
  );
}

export default App;
