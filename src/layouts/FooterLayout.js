import React, {Component} from 'react';
import './footer.scss';
import {RiFacebookFill, RiTwitterFill, RiInstagramLine} from 'react-icons/ri';

export default class FooterLayout extends Component {

    constructor(){
        super();
        this.state = {
            links: [
                {id: 1, name: 'Home'},
                {id: 2, name: 'Shop'},
                {id: 3, name: 'Blog'},
                {id: 4, name: 'Contact'},
            ],
            infos: [
                {id: 1, name: 'How it works'},
                {id: 2, name: 'About us'},
                {id: 3, name: 'Decline rules'},
                {id: 4, name: 'Terms & Condition'},
            ],
            customerCare: [
                {id: 1, name: 'FAQ'},
                {id: 2, name: 'Terms of use'},
                {id: 3, name: 'Privacy Policy'},
                {id: 4, name: 'Discount system'},
            ],

        }
    }

    toLowerCase(name){
        return name.toLowerCase();
    }

    renderList(list){
        return list.map(item => {
            return (
                <li className="
                    footersection__item 
                    footersection__item--size" 
                    key={item.id}>
                    <a href={`/#${this.toLowerCase(item.name)}`} 
                        className="link">
                        {item.name}
                    </a>
                </li>
            )
        })
    }

    render(){
        let {links, infos, customerCare} = this.state;

        return (
            <section className="footersection footersection--size footersection--theme">
                <div className="center footersection__content footersection__content--size">
                    <div className="footersection__description">
                        <h2 className="footersection__title">Clay Shop</h2>
                        <p className="footersection__info">Fashion is a popular 
                            aesthetic expression 
                            at a particular time, place and 
                            in a specific context, especially in clothing, footwear, 
                            lifestyle, accessories, makeup.
                        </p>
                    </div>
                    <div className="footersection__links">
                        <h2 className="footersection__title">Hot links</h2>
                        <ul className="footersection__list">
                            {this.renderList(links)}
                        </ul>
                    </div>
                    <div className="footersection__more">
                        <h2 className="footersection__title">More info</h2>
                        <ul className="footersection__list">
                            {this.renderList(infos)}
                        </ul>
                    </div>
                    <div className="footersection__care">
                        <h2 className="footersection__title">Customer care</h2>
                        <ul className="footersection__list">
                            {this.renderList(customerCare)}
                        </ul>
                    </div>
                </div>
                <div className="footersection__bottom 
                    footersection__bottom--size 
                    footersection__bottom--theme">
                    <div className="center footersection__bottom-content">
                        <p className="footersection__bottom-label">© Clay Shop all rights reserved</p>
                        <div className="footersection__icons">
                            <RiInstagramLine className="footersection__icon" />
                            <RiTwitterFill className="footersection__icon" />
                            <RiFacebookFill  className="footersection__icon" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}