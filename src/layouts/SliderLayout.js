import React, {Component} from 'react';
import './slider.scss';
import './../assets/scss/common.scss';
import image from './../assets/images/sliderimage.png';

export default class HeaderLayout extends Component{

    render(){
        return (
            <section className="slider slider--size slider--theme">
                <div className="center slider__content">
                    <div className="slider__left">
                        <h1 className="slider__title">Admire Stylish Dresses & Looks</h1>
                        <p className="slider__description">If we wanted to build a human-level tool to offer 
                            automated outfit advice, we needed to understand 
                            people’s fashion taste. 
                        </p>
                        <button className="slider__button">Show More</button>
                    </div>
                    <div className="slider__right">
                        <img className="slider__image slider__image--size" src={image} alt="avtaar"/>
                    </div>
                </div>
            </section>
        )
    }
}