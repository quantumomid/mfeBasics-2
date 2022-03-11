import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

// To resolve the class name class caused between Landing component (Marketing) and Header component (Container) 
const generateClassName = createGenerateClassName({
    productionPrefix: "au",
});

export default function App ({ history }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history} >
                    <Switch>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}