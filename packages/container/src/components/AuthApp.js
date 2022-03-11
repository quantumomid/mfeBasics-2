import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
    const ref = useRef(null);
    const history = useHistory(); // Effectively a copy of the browser history

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({pathname: nextPathname}) => {
                // console.log("pathname", nextPathname);

                const { pathname } = history.location; // Current path in container app
                
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
}

export default AuthApp;