import ToolBar from './components/ToolBar/ToolBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';
import Footer from './components/Footer/Footer.tsx';

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <header>
        <ToolBar />
      </header>
      <main className='container mt-4'>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about-us'} element={<AboutUs />}></Route>
          <Route path={'/contacts'} element={<Contacts />}></Route>
          <Route path={'*'} element={<h1>Not Found!</h1>}></Route>
        </Routes>
      </main>
      <footer className='mt-auto'>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
