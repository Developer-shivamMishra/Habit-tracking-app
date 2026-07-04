import React, { useContext, useEffect } from 'react'
import { HabbitProvider } from '../context/HabbitContext'
import './ThemeToggle.css'

import { FaToggleOn , FaToggleOff  } from 'react-icons/fa'

const ThemeToggle = () => {

    const {theme,setTheme} = useContext(HabbitProvider)

    useEffect(() => {
        document.body.className = theme
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = ()=>{
        setTheme(theme == "dark" ? "light" :"dark" )
    }
  return (
    <button onClick={toggleTheme} className={`theme-toggle-btn ${theme}`}>
      {theme == "dark" ? <FaToggleOn  size={30}/>: <FaToggleOff  size={30} />}
    </button>
  )
}

export default ThemeToggle
