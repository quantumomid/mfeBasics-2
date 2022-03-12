import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function for starting up the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

// If we are in Development AND in Isolation - call mount() immediately
if(process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_dashboard-dev-root");

    if(devRoot){
        mount(devRoot);
    }
}

// We are running through the Container and thus should export the mount function
export { mount }