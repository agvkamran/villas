import './App.css';
import Navbar from './components/header/navbar';
import Movie from './components/video/video';
import Footer from './components/footer/footer';
import About from './components/header/about';

import { BrowserRouter, Route } from 'react-router-dom';
import ApartmentsContainer from './components/apartments/apartments copy';

// import Favourite from './components/favorite/favourite';
import FavouriteContainer from './components/favorite/favouriteContainer';
import VillaContainer from './components/villa/villaContainer';
import AllContainer from './components/all/allContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='sticky'>
          <Navbar />
        </div>
        <div>
          <Route exact path='/' render={() => <Main />} />
          <Route path='/about' component={About} />
          <Route path='/allApartments' component={AllContainer} />
          <Route path='/favourite' render={() => <FavouriteContainer />} />
          <Route path='/villa/:villaId?' render={(props) => <VillaContainer {...props} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


const Main = (props) => {
  return (
    <div>
      <div className='movie'>
        <Movie />
      </div>
      <div className='apartments-component'>
        <ApartmentsContainer />
      </div>
      <div></div>
    </div>
  )
}


export default App;
