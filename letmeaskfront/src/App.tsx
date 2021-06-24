import { BrowserRouter, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={ Landing } />
    <Route path="/home" component={ Home } />
    <Route path="/rooms/new" component={ NewRoom } />
    </BrowserRouter>
  );
}