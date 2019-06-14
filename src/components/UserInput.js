import React, { Component } from 'react';
class UserInput extends Component {
    
    render() { 
        return ( 
        <form onSubmit={this.props.onSubmit}
        className="bg-light-blue mw8 center pa5 br2-ns ba b--black-10">        
        <input className="f6 f5-l  bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
        onChange={this.props.onChange}          
        placeholder="Type your message and hit ENTER"  
        value={this.props.input}        
        type="text" /> 
        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" />     
        </form>    
        ) 
     
    }
}
 
export default UserInput;