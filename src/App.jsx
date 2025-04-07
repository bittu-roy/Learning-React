import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from "./components/Examples.jsx";


function App() {


  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
//function App-> 1. must start with Uppercase character
//               2. must return renderable content
export default App;

//jsx-> stands for javascript extension used to write code in a declarative way
// but this extension will not work in browsers
//So behind the scene the build process in React transforms the code that works in a browser

//PROPS- helps to pass data into components and use that components data.

//04/04/2025
//Bydefault, React components gets executed only once
// If we want to execute a component multiple times, we have to tell React to do so.

// Hooks
// Rules for hooks :-
// 1. hooks can only be called inside of Component Functions
// 2. hooks can only be called at the top level
//UseState Hook is used to make a component or variable dynamic.