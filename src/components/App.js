import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import Hero from "./Hero";
import Work from './Work';

function App() {
  return (
    <Route render={({ location }) => (
      <AnimatePresence exitBeforeEnter={true} initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Hero} />
          <Route exact path="/work" component={Work} />
          {/* <Route path="/about" component={Hero} /> */}
          {/* <Route path="/contact" component={Hero} /> */}
        </Switch>
      </AnimatePresence>
      )}
    />
  )
}

export default App;
