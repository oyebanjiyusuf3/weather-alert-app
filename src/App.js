import './App.css'
import React from 'react'
import Header from './components/Header'
import MainView from './components/MainView'
import Favourite from './components/Favourite'
import Footer from './components/Footer'

const App = () => {
  return (
	<div>
		<Header/>
		<MainView/>
		<Favourite/>
		<Footer/>
	</div>
  )
}

export default App