export default function TabButton({ children, isSelected, ...props }) {

    // children props-> provided by React and contains the component we have in between the tabs.
    // which is Component
    //<TabButton>Component</TabButton> from App.jsx
    //And this way where components can wrap other components is called component composition.
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    );
} 