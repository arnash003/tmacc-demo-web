import React from 'react'
import {Header} from './';
import {Banner} from './';


const Layout = ({children}) => {
  return (
    <>
    <Header />
    <Banner />
    {children}
    </>
  )
}

export default Layout