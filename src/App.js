import './style.css'
import Home from './pages/Home'
import CharacterDetail from './pages/CharacterDetail';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
        <Route path={`/characterdetail/:id`} component={CharacterDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
