/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section id="home">
                <div className="content">
                    <p>I have implemented the solution. Please search using a keyword like "conditioner"</p>
                    <p>Due to the time constraint, I have implemented as much as I can</p>
                    <div className="products-list">
                    {this.props.products && 
                        this.props.products.map((product, index) => {
                            return (
                                <div key={index} className="product-container">
                                    <div className="thumbnail">
                                        <img src={product.picture} />
                                    </div>
                                    <div className="details">
                                        <p className="product-title">{product.name}</p>
                                        <p className="price">{product.price}</p>
                                        <p className="product-desc">{product.about}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;