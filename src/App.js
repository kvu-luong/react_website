import React, { Component } from 'react';

import TopMenu from './components/topmenu/TopMenu';
import Header from './components/topmenu/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

    // //using props method 1
    // const NumberOne = (props) =>{
    //         return (
    //         <div className="col-6">
    //           <img className= "card-img-top" src="http://placehold.it/700x300" alt=""/>
    //           <div className="card-body">
    //             <h4 className="card-title">{props.title}</h4>
    //             <p className="card-text">{props.name}</p>
    //           </div>
    //         </div>
    //         )
    // }
    //using props with class: method 2
    // class Product extends Component{
    //   render(){
    //      return(
    //       <div className="col-6">
    //           <img className= "card-img-top" src="http://placehold.it/700x300" alt=""/>
    //           <div className="card-body">
    //             <h4 className="card-title">{this.props.title}</h4>
    //             <p className="card-text">{this.props.name}</p>
    //           </div>
    //       </div>
    //       )
    //   }
    // }
class App extends Component {
  
  thongbao(){
    alert("hello world");
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Header />
        <Body />
        <Footer />
      </div>
      );
  }
}

export default App;
