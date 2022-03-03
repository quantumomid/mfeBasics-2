import React, { Fragment } from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mount);

const App = () => {
    return (
        <Fragment>
            <h1>This is the CONTAINER for the microfrontend apps</h1>
            <hr />
            <MarketingApp />
        </Fragment>
    )
}

export default App;