export default function TabButton({ children, onSelect }) {
  
    // children props-> provided by React and contains the component we have in between the tabs.
    // which is Component
    //<TabButton>Component</TabButton>
    //And this way where components can wrap other components is called component composition.
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
} 