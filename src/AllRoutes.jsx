import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './screens/Layout'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
