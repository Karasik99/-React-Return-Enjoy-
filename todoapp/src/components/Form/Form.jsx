import React, { useEffect, useState } from 'react'
import style from '../App/style.module.scss'
import axios from 'axios';

function Form({closeform , setcloseform , setdata ,data}) {
    const url = 'https://6569d5acde53105b0dd7bcad.mockapi.io/tasks'
    const [task,settask] = useState({
        post:'',
        firstname:'',
        lastname:'',
        text:'',
        date:Currentdate(),
        priority:'Low',
    })
      
    function Currentdate(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let hh = today.getHours();
        let min = today.getMinutes();

    return today = dd + '/' + mm + '/' + yyyy + ' '+ hh+':'+min;
    }

    function CreacteTask (event,task){
        event.preventDefault()
        let post = 
        {
            post:task.post,
            firstname:task.firstname,
            lastname:task.lastname,
            text:task.text,
            date:task.date,
            priority:task.priority,
        }
        axios.post(url,post) 
        setdata(!data)
        setcloseform(!closeform)
    }
    

  return (
      <div className={style.container}>
        <div className={style.formattr}>
            <h1>Please input your task</h1>
            <div onClick={()=>{setcloseform(!closeform)}} className={style.spancont}>
                <span className={style.close}></span>
            </div>
        </div>
        <form className={style.form} action="">
            <div className={style.wrapper}>
                <input value={task.post} onChange={(event)=>{settask({...task,post:event.target.value})}} className={style.post} placeholder='Your post' type="text" />
                <input value={task.firstname} onChange={(event)=>{settask({...task, firstname:event.target.value})}} className={style.firstname} placeholder='Your firstname' type="text" />
                <input value={task.lastname} onChange={(event)=>{settask({...task, lastname:event.target.value})}} className={style.lastname} placeholder='Your lastname' type="text" />
                <select value={task.priority} onChange={(event)=>{settask({...task, priority:event.target.value})}}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <textarea value={task.text} onChange={(event)=>{settask({...task, text:event.target.value})}}  className={style.textarea} placeholder='Your task'cols="30" rows="6"></textarea>
            <button onClick={(event)=>{CreacteTask(event,task)}} className={style.submit} type="submit">Go</button>
        </form>
    </div>
  )
}

export default Form