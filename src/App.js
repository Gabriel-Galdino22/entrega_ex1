import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Aparelhos from './Pages/Aparelhos';
import VisualizarAparelho from './Pages/VisualizarAparelho';
import NotFound from './Pages/notfound';

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
