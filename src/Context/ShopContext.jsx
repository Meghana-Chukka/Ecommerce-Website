//this component is rendered by App.js

import React,{createContext} from "react"; // createcontext is a function and React is needed to create and manage components, and createContext is used to create a context for managing state across the component tree.
import all_product from "../Components/Assests/all_product";//This line creates a new context named ShopContext with a default value of null. Contexts in React are used to pass data through the component tree without having to pass props down manually at every level.

export const ShopContext = createContext(null);

//This line creates a new context named ShopContext with a default value of null.
//Contexts in React: Are used to share data (like user info, theme, or in this case, product details) across components without passing props down manually at every level.
//createContext(null): Initializes the context with a default value of null.

const ShopContextProvider = (props) => {
    const contextValue = {all_product};

return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)}
export default ShopContextProvider;

/*const ShopContextProvider = (props) => { ... }: This defines a functional component named ShopContextProvider that takes props as an argument.

props: The props object contains the properties passed to this component, including children.
const contextValue = { all_product };

This creates an object named contextValue that contains the all_product data. This will be passed as the value of the context.
return ( ... )

The return statement returns JSX that will be rendered by this component.
<ShopContext.Provider value={contextValue}> ... </ShopContext.Provider>

This uses the ShopContext.Provider component to pass down the context value (contextValue) to its children.
value={contextValue}: This prop sets the value of the context that will be accessible to any component that consumes this context.
{props.children}: This renders any child components that are wrapped inside the ShopContextProvider.
export default ShopContextProvider;

This exports the ShopContextProvider component so it can be used in other parts of the application. */