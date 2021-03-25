import React,{Component} from 'react';
import './products.scss';
import image1 from './../assets/images/11.png';
import image2 from './../assets/images/12.png';
import image3 from './../assets/images/13.png';

export default class ProductLayouts extends Component {

    constructor(){
        super();
        this.state = {
            products: [
                {id: 1, name: "Women's black vest Gucci", price: '$715', image: image1, 
                    description: 'A shiny dress in the style of Lady Gaga, for bright events and cool parties…'},
                {id: 2, name: "Red dress Valentino", price: '$1610', image: image2, 
                    description: 'A shiny dress in the style of Lady Gaga, for bright events and cool parties…'},
                {id: 3, name: "Shiny dress Givenchy", price: '$540', image: image3, 
                    description: 'A shiny dress in the style of Lady Gaga, for bright events and cool parties…'},
                {id: 4, name: "Shiny dress Givenchy", price: '$540', image: image1, 
                    description: 'A shiny dress in the style of Lady Gaga, for bright events and cool parties…'},
            ]
        }
    }

    renderProducts(products){
        return products.map((product) => {
            return (
                <li className="product product--size product--theme" key={product.id}>
                    <img src={product.image} className="product__image" alt="avtaar"></img>
                    <div className="product__content">
                        <h1 className="product__title">Women's black vest Gucci</h1>
                        <div className="product__bottom">
                            <h4 className="product__price">{product.price}</h4>
                            <div className="button-shop">Shop Now</div>
                        </div>
                    </div>
                </li>
            )
        })
    }

    render(){
        let {products} = this.state;

        return (
            <section className="productsection productsection--size">
                <div className="center productsection__content content--size">
                    <h1 className="productsection__title">You may like</h1>
                    <ul className="products products--size">
                        {this.renderProducts(products)}
                    </ul>
                </div>
            </section>
        )
    }
}