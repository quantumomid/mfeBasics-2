import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Pricing from "./components/Pricing";
import Album from "./components/Landing";

// To resolve the class name class caused between Landing component (Marketing) and Header component (Container) 
const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
});

export default function App ({ history }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history} >
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/" component={Album} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}