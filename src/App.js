import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar'
import Hero from './components/HomePageHero/Hero'
import Meals from './components/meals/Meals'

function App() {
  // const img = 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="hero align-center">
          <Hero/>
        </div>
        <div className="meals my-3 px-4">
          <Meals />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
