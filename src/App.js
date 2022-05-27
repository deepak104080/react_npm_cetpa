import React, {lazy, Suspense, useState} from 'react';
// import ColorApp from './ColorApp';
import Home from './Home';
// import ColorApp from './ColorApp';
// import GitHub from './GitHub';
const ColorApp = lazy(() => import('./ColorApp'));
const GitHub = lazy(() => import('./GitHub'));
// const ToDoFn = lazy(() => import('./ToDoFn'));

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h2>test</h2>
        <Home/>
        <button onClick={() => setShow(true)}>Show All Component</button>
        {/* <ColorApp/>
          <GitHub/> */}
        {show && <Suspense fallback={<div>Loading......</div>}>
          <ColorApp/>
          <GitHub/>
        </Suspense>}
        
      </header>
    </div>
  );
}

export default App;


//performance in lighthouse