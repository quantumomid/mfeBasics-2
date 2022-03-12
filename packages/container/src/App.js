import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

// console.log(mount);

const generateClassName = createGenerateClassName({
    productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
    const [ isSignedIn, setIsSignedIn ] = useState(false);
    
    useEffect(() => {
        if(isSignedIn){
            history.push("/dashboard");
        }
    }, []);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/"/>}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
}

export default App;