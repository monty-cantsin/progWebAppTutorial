import React from 'react'
import { BrowserRouter } from 'react-router'

import 'normalize.css'
import styles from './App.css'
import Routes from '../routes/routes'
import Header from '../header/header.js'


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Routes />
      </div>  
    </div>
  </BrowserRouter>
)

export default App
