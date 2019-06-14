import React, { Component } from 'react';
class ChatList extends Component {

    render() { 
        
        return ( <div>
            <ul style={{listStyleType:"none"}}>{this.props.chats.map((chat,index)=>{
                return <div key={index} >
                    <li>
                    <div className="ba black #000000 bg-light-blue br2 shadow-3 ma2"> 
                         {chat.productId}
                </div>
                <div className="  bg-grey  shadow-2 ma2">{chat.price}</div>
                
                </li>
                </div>
            })}
            </ul>
            
            </div>
            
            
            
                
            );
    }
}
 
export default ChatList;