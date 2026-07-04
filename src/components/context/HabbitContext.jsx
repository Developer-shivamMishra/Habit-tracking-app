import React, { createContext, useEffect, useState } from 'react'

export const HabbitProvider = createContext()

const HabbitContext = ({children}) => {
  const [theme,setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "dark"
  })
    const [currentDate,setCurrentDate] = useState(new Date())
    const [habits,setHabits] = useState(() => {
      const saved = localStorage.getItem("habits")
      return saved ? JSON.parse(saved) : []
    })

    const monthkey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    const [showModel,setShowModel] = useState(false)

  const totaldays = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();

    const PrevMonth = ()=>{
        setCurrentDate(new Date(

            currentDate.getFullYear(),
            currentDate.getMonth()-1,1
        ))
    }
   const NextMonth = ()=>{
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1 ,1
      )
    )
   }
     const days = Array.from(
        {length:totaldays},
        (_,index) => index +1
    )


    useEffect(()=>{
      localStorage.setItem("habits" ,JSON.stringify(habits))
    },[habits])

    useEffect(() => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute('data-theme', theme)
  document.body.className = theme
}, [theme]);

useEffect(() => {
  document.body.className = theme
  document.documentElement.setAttribute('data-theme', theme)
}, []);
  return (
    <div>
      <HabbitProvider.Provider value={{
        currentDate,setCurrentDate,NextMonth,PrevMonth,totaldays,habits,setHabits,showModel,setShowModel,days,monthkey ,theme,setTheme
      }}>
{children}
      </HabbitProvider.Provider>
    </div>
  )
}

export default HabbitContext
