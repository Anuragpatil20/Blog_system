import React, { Component } from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import CreateBlog from './Component/CreateBlog'
import UpdateBlog from './Component/UpdateBlog'
import Blog from './Component/Blog'

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
        <Route path='/'  element ={<Blog/>}></Route>
        <Route path='/create'  element ={<CreateBlog/>}></Route>
        <Route path='/update/:id'  element ={<UpdateBlog/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
