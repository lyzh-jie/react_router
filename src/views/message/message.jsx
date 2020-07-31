import React, {Component} from 'react';
import {NavLink,Route} from 'react-router-dom'

import MessageDetail from '../message-detail/message-detail'

class Message extends Component {
  constructor(props){
    super()
    this.state = {
      messages:[
        {id:1,message:'message01'},
        {id:2,message:'message02'},
        {id:3,message:'message03'},
        {id:4,message:'message04'},
        {id:5,message:'message05'}
      ]
    }
  }
  handlePush = ()=>{
      console.log('--push');
      this.props.history.push('/home');
  }
  handleGoBack = ()=> {
    this.props.history.goBack();
  }
  render () {
    return (
      <div>
        <ul style={{listStyle:'none'}}>
          {this.state.messages.map((item,index)=><li key={index} onClick={this.handleId}>
            <NavLink to={'/about/message/'+item.id}>{item.message}</NavLink>
            &nbsp;<button onClick={this.handlePush}>查看push</button><button>查看replace</button>
          </li>)}
        </ul>
        <button onClick={this.handleGoBack}>返回</button><button>前进</button>
        <Route path={'/about/message/:id'} component={MessageDetail}/>
      </div>
    )
  }
}

export default Message;