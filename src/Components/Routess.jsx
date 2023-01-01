import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Results from './Results'

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/search'/>}/>
        <Route path='/search' element={<Results/>}/>
        <Route path='/videos' element={<Results/>}/>
        <Route path='/news' element={<Results/>}/>
        <Route path='/images' element={<Results/>}/>
      </Routes>
    </div>
  )
}

export default Routess
