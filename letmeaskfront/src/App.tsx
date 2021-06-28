import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from "./context/ThemeContext";

import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import { ThemeTesting } from "./pages/ThemeTesting";


export function App() {

  return (
    <BrowserRouter>
    <ThemeContextProvider>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/theme" component={ThemeTesting} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}