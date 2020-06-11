import React from "react";
import { window, document } from "browser-monads";


const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {
    let windowWidth = typeof window !== `undefined` ? window.innerWidth : 768;
    let windowHeight = typeof window !== `undefined` ? window.innerHeight : 1024;
    const [width, setWidth] = React.useState(windowWidth);
    const [height, setHeight] = React.useState(windowHeight);
    let handleWindowResize;
    if (typeof window !== `undefined`) {
        handleWindowResize = () => {
            windowWidth = typeof window !== `undefined` ? window.innerWidth : 768;
            windowHeight = typeof window !== `undefined` ? window.innerHeight : 1024;
            setWidth(windowWidth);
            setHeight(windowHeight);
        }
    }

    React.useEffect(() => {
        // if (typeof window !== `undefined`) {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
        // }
    }, []);
    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};


export const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
}
