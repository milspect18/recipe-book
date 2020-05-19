import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import RecipeApp from "../components/RecipesApp";

const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={{ history }}>
        <Switch>
            <Route exact path="/" component={RecipeApp} />
        </Switch>
    </Router>
);
