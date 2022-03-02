import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function for starting up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}

// If we are in Development AND in Isolation - call mount() immediately
if(process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if(devRoot){
        mount(devRoot);
    }
}

// We are running through the Container and thus should export the mount function
export { mount }