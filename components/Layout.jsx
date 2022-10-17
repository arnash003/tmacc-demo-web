import React from 'react'
import {Header} from './';



const Layout = ({children}) => {
  return (
    <>
    <Header />
    {/* <Banner /> */}
    {children}
    </>
  )
}

export default Layout