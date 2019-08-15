import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./Home";
import { About } from "./About";
import { List } from "./List";

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/about" component={About} />
            </Switch>
        </main>
    );
};
