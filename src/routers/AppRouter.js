import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import RecipeList from "../components/RecipeList";
import LoginPage from "../components/LoginPage";

const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history} >
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/recipeList" component={RecipeList} />
            <Route component={<p>Unknown Path</p>} />
        </Switch>
    </Router>
);

export { history, AppRouter as default };
