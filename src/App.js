
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from './components/header';
import SimpleBottomNavigation from "./components/bottomNab";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
