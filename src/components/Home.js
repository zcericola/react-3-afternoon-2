import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';
import axios from 'axios';

// import axios

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: '',
            index: 0,
            posts: [{title: "Loading...",image: 'https://unsplash.it/900/400/?random'}]
        }
    }

    // insert componentWillMount:
    componentDidMount(){
        axios.get('/api/featured').then( (response) => {            
            this.setState({
              featured: response.data,
              posts: response.data,
              index: ~~(Math.random() * response.data.length) + 0
            });
        }).catch( (err) => console.log(err));
    }
    

    render(){
        // map over your recommended blogs here, replace null.
        const posts = this.state.posts.map( (c,i) => {
          return  <BlogThumb key = {i} blog = {c} />
        })

        return(
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {/* put your mapped blogs here */}
                    {posts}
                </div>
            </div>
        )
    }
}

export default Home;