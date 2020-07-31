import React, {Component} from 'react';
const messageDetails = [{id:1,message:'message01',detail:'喜欢瑞奇宝宝'},
                        {id:2,message:'message02',detail:'喜欢恐龙阿旺'},
                        {id:3,message:'message03',detail:'喜欢汪汪队'},
                        {id:4,message:'message04',detail:'喜欢萌鸡小队'},
                        {id:5,message:'message05',detail:'喜欢小猪佩奇'}]

class MessageDetail extends Component {
  render () {
    console.log(this.props.match.params.id);
    let {id} = this.props.match.params;
    let messageDetail =messageDetails.find((messageDetail)=> messageDetail.id === id*1);
    return (
      <ul>
        <li>id:{messageDetail.id}</li>
        <li>message:{messageDetail.message}</li>
        <li>detail:{messageDetail.detail}</li>
      </ul>
    )
  }
}

export default MessageDetail;