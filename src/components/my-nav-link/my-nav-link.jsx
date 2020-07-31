import React from 'react'
import {NavLink} from 'react-router-dom'
//构造函数的方式创建组件 传递组件的属性使用形参
export default function MyNavLink(props) {
  return(
    <NavLink {...props} className='list-group-item'></NavLink>
  )
}