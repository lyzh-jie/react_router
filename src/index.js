import React from 'react'
import {render} from 'react-dom'
//引入react-router
import {BrowserRouter} from  'react-router-dom'
import App from './components/app/app'

render(
  <BrowserRouter><App/></BrowserRouter>
  ,document.getElementById('root'));