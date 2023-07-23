import HomePage from "./pages/home-page";
import MyRecipes from "./pages/projects/my-recipes";
import NotFound from "./pages/not-found";
import MyRecipesMobile from "./pages/projects/my-recipes-mobile";
import { Route, Router, Switch } from "wouter";
import PreserveScroll from "./preserve-scroll";

export default function App() {
  return (
    <Router>
      <PreserveScroll />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/project/my-recipes-web" component={MyRecipes} />
        <Route path="/project/my-recipes-mobile" component={MyRecipesMobile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
