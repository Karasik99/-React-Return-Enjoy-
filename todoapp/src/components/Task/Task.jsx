import React, { useState } from "react";
import style from '../App/style.module.scss'
import axios from "axios";


function Task({item,data,setdata,styles}) {

  const url = 'https://6569d5acde53105b0dd7bcad.mockapi.io/tasks'
  const newurl = 'https://6569d5acde53105b0dd7bcad.mockapi.io/complitedtask'

  
  function Rewrite(id){
      axios.get(`${url}/${id}`).then((item)=>{
        item.data.comlited = true
        axios.post(newurl,item.data)
      })
      axios.delete(`${url}/${id}`)
      setdata(!data)
  }

  return (
    <tr style={styles} onClick={()=>{Rewrite(item.id)}} className={style.task}>
      <td>{item.post}</td>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.text}</td>
      <td>{item.date}</td>
      <td>{item.priority}</td>
    </tr>
  );
}

export default Task;
