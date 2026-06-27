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
       <button onClick={handleDelete}>
        <RiDeleteBin6Line className="text-red-500 text-xl hover:text-red-600 cursor-pointer"/>
       </button>
    </div>
  )
}

export default DeleteHabit
