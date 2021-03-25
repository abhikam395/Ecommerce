import React, {Component } from 'react';
import './collection.scss';
import './../assets/scss/common.scss';
import leftImage from './../assets/images/1.png';
import rightImage from './../assets/images/3.png';
import bottomImage from './../assets/images/2.png';

export default class CollectionLayout extends Component{
    render(){
        return (
            <section className="collection collection--size">
                <div className="center collection__content collection__content--size">
                    <div className="collection__left">
                        <img src={leftImage} alt="avtaar" className="image"/>
                    </div>
                    <div className="collection__right">
                        <div className="collection__top">
                            <div className="collection-top__left collection-top__left--theme">
                                <div className="top-left__content">
                                    <h4 className="collection__subtitle">24 Items</h4>
                                    <h1 className="collection__title">Bestsellers</h1>
                                </div>
                            </div>
                            <div className="collection-top__right">
                                <img src={rightImage} className="right-image" alt="avtaar" />
                                <div className="top-right__content">
                                    <button className="button-new">New</button>
                                    <h3 className="collection__title bottom">Dresses</h3>
                                </div>
                            </div>
                        </div>
                        <div className="collection__bottom collection__bottom--theme">
                            <img src={bottomImage} className="bottom-image" alt="avtaar" />
                            <div className="bottom__content">
                                <button className="button-new">New</button>
                                <h3 className="collection__title bottom">Denim Jackets</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}