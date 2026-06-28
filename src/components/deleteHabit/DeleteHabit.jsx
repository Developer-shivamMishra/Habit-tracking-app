import React, { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { HabbitProvider } from '../context/HabbitContext';
const DeleteHabit = ({id}) => {

    const {habits,setHabits} = useContext(HabbitProvider);

    const handleDelete = ()=>{
        const updateHabits = habits.filter((habit)=> habit.id !== id);
        setHabits(updateHabits)
    }
  return (
    <div>
       <button onClick={handleDelete} className="delete-habit-btn" aria-label="Delete habit">
        <RiDeleteBin6Line className="delete-habit-icon"/>
       </button>
    </div>
  )
}

export default DeleteHabit
