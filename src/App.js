
import { Outlet } from 'react-router-dom';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
