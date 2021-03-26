import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/layout/Nav"
import Home from "./components/Home";
import Contact from "./components/Contact";
import LoginPage from "./components/Login"
import AdminPage from "./components/Admin"
import CharacterDetail from "./components/Detail";
import { AuthProvider } from "./components/context/AuthContext"
import './sass/styles.scss';

function App() {
  return (
    <AuthProvider>
        <Router>
          <Navigation />

        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact"><Contact /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/admin"><AdminPage /></Route>
            <Route path="/detail/:id"><CharacterDetail /></Route>
          </Switch>
        </Container>
      </Router>
    </AuthProvider>  
  );
}

export default App;
