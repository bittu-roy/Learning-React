import { useState } from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
               {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          {/* {selectedTopic} */}
        </section>
      </main>
    </div>
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