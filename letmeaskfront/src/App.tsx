import { BrowserRouter, Route } from "react-router-dom";

import { AuthContextProvider } from './context/AuthContext';

import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


export function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}