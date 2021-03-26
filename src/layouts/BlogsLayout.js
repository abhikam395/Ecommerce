import React, {Component} from 'react';
import './blogslayout.scss';
export default class BlogsLayout extends Component {

    constructor(){
        super();
        this.state = {
            blogs: [
                {id: 1, name: "The world's 50 most powerful blogs"},
                {id: 2, name: "The world's 50 most powerful blogs"},
                {id: 3, name: "The world's 50 most powerful blogs"},
                {id: 4, name: "The world's 50 most powerful blogs"},
                {id: 5, name: "The world's 50 most powerful blogs"},
                {id: 6, name: "The world's 50 most powerful blogs"},
                {id: 7, name: "The world's 50 most powerful blogs"},
            ]
        }
    }

    renderBlogs(blogs){
        return blogs.map(blog => {
            return (
                <li className="
                    blogsection__blog 
                    blogsection__blog--size" 
                    key={blog.id}>
                    <img className="blogsection__image" 
                        src="https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg" 
                        alt="imag">
                    </img>
                    <h2 className="blogsection__title">{blog.name}</h2>
                </li>
            )
        })
    }

    render(){
        let {blogs} = this.state;

        return (
            <section className="
                blogsection 
                blogsection--size
                blogsection--theme">
                <ul className="
                    blogsection__blogs 
                    blogsection__blogs--size 
                    blogsection__blogs--theme">
                    {this.renderBlogs(blogs)}
                </ul>
            </section>
        )
    }
}
