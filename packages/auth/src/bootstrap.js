import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function for starting up the app
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if(onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,
        el
    );

    return {
        // Call this whenever the parent, i.e. Container, does any navigation
        onParentNavigate({ pathname: nextPathname }) {
            // console.log("Container just navigated");
            const { pathname } = history.location; 
                
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

// If we are in Development AND in Isolation - call mount() immediately
if(process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_auth-dev-root");

    if(devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are running through the Container and thus should export the mount function
export { mount }