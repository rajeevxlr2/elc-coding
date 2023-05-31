/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.updateProducts = this.updateProducts.bind(this);
    }
    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */

    updateProducts = (products) => {
        console.log("Products ; ", products);
        this.setState({ products: products});
    }

    render() {
        return (
            <div className="App">
                <Menu products={this.state.products} onUpdate={this.updateProducts} />
                <Home products={this.state.products} />
            </div>
        );
    }

}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
