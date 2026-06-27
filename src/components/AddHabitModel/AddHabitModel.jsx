import React, { useContext, useState } from 'react'
import { HabbitProvider } from '../context/HabbitContext'

const AddHabitModel = ({}) => {

  const [habit,setHabit] = useState("")
    const {habits,setHabits} = useContext(HabbitProvider)
    const {setShowModel} = useContext(HabbitProvider)


  const handleChange = (e)=>{
    setHabit(e.target.value)
    console.log(e.target.value);
    
  }
  const handleSumbit = (e)=>{
    e.preventDefault()
     const newHabit = {
      id : Date.now(),
     name : habit,
     completeDays : []
  }
  setHabits([...habits,newHabit])
    setHabit("")
setShowModel(false)
    
  }

  const cancelBtn = ()=>{
    setShowModel(false)
  }

 
  return (
    <div className='add-habit-modal-wrapper'>
      <div className='add-habit-modal-card'>
        <form className='w-full' onSubmit={handleSumbit}>
          <input
            onChange={(e) => setHabit(e.target.value)}
            value={habit}
            className='add-habit-input'
            type="text"
            placeholder='Habit name...'
            id="habitinput"
          />
          <div className='add-habit-actions'>
            <button type='submit' className='add-habit-submit'>Add Habit</button>
            <button onClick={cancelBtn} type='button' className='add-habit-cancel'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddHabitModel
