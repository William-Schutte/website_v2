import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Hero from "./Hero";
import Work from './Work';

function App() {
  return (
    <Route render={({ location }) => (
      <AnimatePresence exitBeforeEnter={true} initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Hero} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      )}
    />
  )
}

export default App;
