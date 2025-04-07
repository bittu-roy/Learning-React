export default function TabButton({ children, onSelect, isSelected }) {

    // children props-> provided by React and contains the component we have in between the tabs.
    // which is Component
    //<TabButton>Component</TabButton>
    //And this way where components can wrap other components is called component composition.
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
} 