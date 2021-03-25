import React, {Component} from 'react';
import './category.scss';
import './../assets/scss/common.scss';
import image1 from './../assets/images/5.png';
import image2 from './../assets/images/6.png';
import image3 from './../assets/images/7.png';
import image4 from './../assets/images/8.png';

export default class CategoryLayout extends Component{

    constructor(){
        super();
        this.state = {
            categories: [
                {id:1, name: 'Louis Vouiton', image: image1},
                {id:2, name: 'Dolce&Gabbana', image: image2},
                {id:3, name: 'Gucci', image: image3},
                {id:4, name: 'Dries van Noten', image: image4},
            ],
            sliders: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
            ],
            alreadySeletecSlider: null
        }
        this.onSliderClick = this.onSliderClick.bind(this);
    }

    componentDidMount(){
        let element = document.getElementsByClassName('category__slider')[0];
        element.classList.add('add-border');
        this.setState({alreadySeletecSlider: element})
    }

    onSliderClick(event){
        let {alreadySeletecSlider} = this.state;
        let target = event.target;
        
        alreadySeletecSlider.classList.remove('add-border');
        target.classList.add('add-border');

        this.setState({alreadySeletecSlider: target});
    }

    renderCategories(categories){
        return categories.map((category) => {
            return (
                <li key={category.id} className="category category--size">
                    <img className="category__image" src={category.image} alt="avtaar" />
                    <h4 className="category__title">{category.name}</h4>
                </li>
            )
        })
    }

    renderBottomSlider(sliders){
        return sliders.map((slider) => {
            return (
                <li 
                    className="category__slider" 
                    key={slider.id}
                    onClick={this.onSliderClick}
                >

                </li>
            )
        })
    }
    
    render(){
        let {categories, sliders} = this.state;
        return (
            <section className="categorysection categorysection--size">
                <div className="center categorycontent categorycontent--theme categorycontent--size">
                    <ul className="categories categories--size">
                        {this.renderCategories(categories)}
                    </ul>
                    <ul className="category__sliders">
                        {this.renderBottomSlider(sliders)}
                    </ul>
                </div>
            </section>
        )
    }
}