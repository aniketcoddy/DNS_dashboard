import React from 'react'
import Sidebar from './Sidebar'

const Wrap = ({children}) => {
  return (
    <div>
      <Sidebar/>
      <main>{children}</main>
    </div>
  )
}

export default Wrap
