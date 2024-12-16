import React from 'react'
const MyModule =  React.lazy(()=>import('./MyModule'));
// const MyModule = myLazy(() => import("./MyModule"));


function App() {
    // return <><h1>App</h1><MyModule/></>
    // return <><h1>App</h1><React.Suspense><MyModule /></React.Suspense></>
    return <><h1>App</h1><React.Suspense fallback={'Loading...'}><MyModule /></React.Suspense></>
}

export default App;