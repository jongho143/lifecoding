import React, { Component } from 'react';


class Subject extends Component {
  render (){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Toc extends Component {
  render () {
    return (
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">Javascript</a></li>
      </ul>
    );
  }
}


class Content extends Component {
  render () {
    return (
      <article>
        <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Subject title="WEB" sub="world wide web!" />
        <Toc />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
