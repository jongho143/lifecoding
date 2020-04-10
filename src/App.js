import React, { Component } from 'react';
import Toc from './components/Toc';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject: {title:'WEB', sub:'World Wide Web!'},
      wellcome:{title:'Wellcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'Wellcome'){
      _title = this.state.wellcome.title;
      _desc = this.state.wellcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
         title={this.state.subject.title} 
         sub={this.state.subject.sub}
         onChangePage={function(){
           this.setState({mode:'Wellcome'})
         }.bind(this)}
        />
        <Toc data={this.state.contents}/>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
