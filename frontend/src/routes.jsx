import {Router, Route} from 'react-router';
import {Navbar} from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

const createRoutes = () => (
    <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
    </Router>
) 