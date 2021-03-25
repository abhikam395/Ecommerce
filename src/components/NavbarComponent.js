import React, {Component} from 'react';
import './navbar.scss';
import {FiSearch, FiShoppingCart} from 'react-icons/fi';
import {RiArrowDropDownLine} from 'react-icons/ri'

export default class NavbarComponent extends Component {

    constructor(){
        super();
        this.state = {
            menus: [
                {id: 1, name: 'Home'},
                {id: 2, name: 'Shop'},
                {id: 3, name: 'Blog'},
                {id: 4, name: 'Contact'},
            ],
            options: [
                {id: 1, icon: FiSearch, name: 'Search'},
                {id: 2, icon: FiShoppingCart, name: 'Cart'},
            ]
        }
    }

    renderOptions(options){
        return options.map((option) =>{
                let Icon = option.icon;
                return (
                    <li className="navbar__option" key={option.id}>
                        <Icon className="navbar__icon"/>
                    </li>
                )
            }
        )
    }

    renderMenus(menus){
        return menus.map((menu) => {
            if(menu.name === 'Blog'){
                return (
                    <li className="navbar__menu" key={menu.id}>
                        {menu.name}
                        <RiArrowDropDownLine className="menu-icon"/>
                    </li>
                )
            }
            return <li className="navbar__menu" key={menu.id}>{menu.name}</li>;
        })
    }

    render(){
        let {menus, options} = this.state;

        return (
            <nav className="navbar navbar--size navbar--theme">
                <div className="navbar__left">
                    <a href="/" className="navbar__title">Clay Shop</a>
                </div>
                <div className="navbar__middle">
                    <ul className="navbar__menus">
                        {this.renderMenus(menus)}
                    </ul>
                </div>
                <div className="navbar__right">
                    <ul className="navbar__options">
                        {this.renderOptions(options)}
                    </ul>
                </div>
            </nav>
        )
    }
}