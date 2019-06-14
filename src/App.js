import React, { Component } from 'react';
import Header from './components/Header';
import ChatList from './components/ChatList';
import UserInput from './components/UserInput';
import {tempData} from './data';
import './App.css';
class App extends Component {
  state = { 
    data:[],
    input:""

   }
   componentDidMount(){
     this.setState({data:tempData})
   }
   handleSubmit=()=>{
    console.log(this.state);
   }
   handleChange=(e)=>{
    this.setState({input:e.target.value})
   }
  render() { 
    return ( <div className="app">       
     <Header />        
     <ChatList  chats={this.state.data}/>        
     <UserInput chat={this.state.input}
           onSubmit={this.handleSubmit} 
           onChange={this.handleChange} 
           value={this.state.input} />    
     </div>   
      )  } 
  
}
 
export default App;

