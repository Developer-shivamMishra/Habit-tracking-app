import React, { createContext, useEffect, useState } from 'react'

export const HabbitProvider = createContext()

const HabbitContext = ({children}) => {
    const [currentDate,setCurrentDate] = useState(new Date())
    const [habits,setHabits] = useState(() => {
      const saved = localStorage.getItem("habits")
      return saved ? JSON.parse(saved) : []
    })
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
 
        setCurrentDate(new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() +1 ,1
        ))

        setHabits(
          habits.map((habit)=>({
          ...habit, completeDays: []
          }))
        )
    }

     const days = Array.from(
        {length:totaldays},
        (_,index) => index +1
    )


    useEffect(()=>{
      localStorage.setItem("habits" ,JSON.stringify(habits))
    },[habits])

  return (
    <div>
      <HabbitProvider.Provider value={{
        currentDate,setCurrentDate,NextMonth,PrevMonth,totaldays,habits,setHabits,showModel,setShowModel,days
      }}>
{children}
      </HabbitProvider.Provider>
    </div>
  )
}

export default HabbitContext
