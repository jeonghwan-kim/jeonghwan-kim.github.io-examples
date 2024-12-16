import React from "react";

let moduleId = 0;
const loaded = {};

function myLazy(moduleLoader) {
    const id = moduleId++;

    return function MyLazyComponent2(props) {
        const LoadedComponent = loaded[id];
        if (LoadedComponent) {
            return <LoadedComponent {...props} />;
        }

        throw moduleLoader().then(async lazyModule => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            loaded[id] = lazyModule.default;
        });
    };
};

export default myLazy;