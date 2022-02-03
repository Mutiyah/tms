import './App.css';
import { Route, Switch } from 'react-router-dom';
import HeaderPage from './components/HeaderPage';
import ContactUsPage from './components/ContactUsPage';
import SolutionsPage from './components/SolutionsPage';
import AboutUsPage from './components/AboutUsPage';
import HomePage from './components/HomePage';
import FooterSection from './components/FooterSection';




function App() {
  return (
    <div className="App">
     <HeaderPage  />
     <main className="mainSection">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Switch>
        <Route path="/about-us" component={AboutUsPage } />
      </Switch><Switch>
        <Route path="/solutions" component={SolutionsPage} />
      </Switch><Switch>
        <Route path="/contact-us" component={ContactUsPage} />
      </Switch>
      <FooterSection />
      </main>
    </div>
  );
}

export default App;
