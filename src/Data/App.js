import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aparelhos from './pages/Aparelhos';
import VisualizarAparelho from './pages/VisualizarAparelho';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aparelhos" exact component={Aparelhos} />
        <Route path="/aparelhos/:id" component={VisualizarAparelho} />
        <Route path="/notfound" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
