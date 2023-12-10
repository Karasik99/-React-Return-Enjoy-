import React, { useEffect } from 'react'
import style from './style.module.scss'
import { useState } from 'react'
import Task from '../Task/Task'
import Form from '../Form/Form'
import axios from 'axios'
import * as customtask from '../../customtasks.json'

function App() {
  const [closeform,setcloseform] = useState(false)
  const [active,setactive] = useState(null)
  const [activity,setactivity] = useState(0)
  const [data,setdata] = useState(false)
  const [tasks,settask]= useState([])
  const [customurl,setcustomurl] = useState('https://6569d5acde53105b0dd7bcad.mockapi.io/tasks')
  const firstbuttons = ['Current Tasks','Complited Tasks']
  const buttons = ['Priority','Assignee','LastName','Task']
  const [search,setsearch] = useState('')
  const [filterlist,setfilterlist] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      let response = axios.get(customurl)
      response.then((data)=>{settask(data.data)})
    },500)   
  },[data])

  useEffect(() => {
    const results = tasks.filter((item)=>{
      return item = item.text.includes(search) 
    });
    setfilterlist(results);
  }, [search]);

  const AddExampleTask = () =>{
    let list = customtask.default

    function Currentdate(){
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let hh = today.getHours();
      let min = today.getMinutes();
      return today = dd + '/' + mm + '/' + yyyy + ' '+ hh+':'+min;
      }

    list.map((item)=>{
      item.date = Currentdate()
      return axios.post(customurl,item)
    })
    setdata(!data)
  }

  function GetData(firstbuttons,index){
    
    if (firstbuttons[index]=='Current Tasks'){
      setcustomurl('https://6569d5acde53105b0dd7bcad.mockapi.io/tasks')
      setdata(!data)
    }

    else if (firstbuttons[index]=='Complited Tasks'){
      setcustomurl('https://6569d5acde53105b0dd7bcad.mockapi.io/complitedtask')
      let response = axios.get(customurl)
      response.then((data)=>{settask(data.data)})
      setdata(!data)
    }
  }

  function Filter(buttons,index){
    let filter = buttons[index]
    let response;
    switch (filter) {
      case 'Priority':
        response = axios.get(customurl)
        response.then((data)=>{settask(data.data.sort((a,b)=>{
          if(a.priority.toLowerCase()<b.priority.toLowerCase()){
            return -1;
          }
          else if(a.priority.toLowerCase()>b.priority.toLowerCase()){
            return 1
          }
          return 0
        }))})
        break;

      case 'Assignee':
        response = axios.get(customurl)
        response.then((data)=>{settask(data.data.sort((a,b)=>{
          if(a.post.toLowerCase()<b.post.toLowerCase()){
            return -1;
          }
          else if(a.post.toLowerCase()>b.post.toLowerCase()){
            return 1
          }
          return 0
        }))})
        break;

        case 'Task':
        response = axios.get(customurl)
        response.then((data)=>{settask(data.data.sort((a,b)=>{
          if(a.text.toLowerCase()<b.text.toLowerCase()){
            return -1;
          }
          else if(a.text.toLowerCase()>b.text.toLowerCase()){
            return 1
          }
          return 0
        }))})
        break;

        case 'LastName':
        response = axios.get(customurl)
        response.then((data)=>{settask(data.data.sort((a,b)=>{
          if(a.lastname.toLowerCase()<b.lastname.toLowerCase()){
            return -1;
          }
          else if(a.lastname.toLowerCase()>b.lastname.toLowerCase()){
            return 1
          }
          return 0
        }))})
        break;
      default:
        break;
    }
  }

  const OpenForm = () => {
    setcloseform(!closeform)
  }

  return (
    <main className={style.main}>
      <section className={style.todolist}>
      {closeform? <Form setcloseform={setcloseform} closeform={closeform} data={data} setdata={setdata}  />:''}
        <div className={style.hat}>
          <img className={style.todologo} src="/assets/done.png" alt="done" />
          <h1 className={style.todotitle}>Todo List</h1>
        </div>
        <p className={style.todosubtitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur tempora id consectetur illo voluptatem, doloribus sunt dolor quos vero nesciunt! Ipsa porro veritatis unde quibusdam nulla quia repellat sit expedita?</p>
        <div className={style.interactions}>
          {firstbuttons.map((item,index)=>{
            return <button onClick={()=>{setactivity(index); GetData(firstbuttons,index)}} className={activity == index? `${style.btn} ${style.active}` : `${style.btn}`} > {item} </button>
          })}
          <input value={search} onChange={((event)=>{setsearch(event.target.value)})} placeholder='search' className={style.search} type="text" />
          <button onClick={OpenForm} className={`${style.btn} ${style.addbtn}`}>
            <img src="/assets/cursor.png" alt="cursor" />
            AddTask
            </button>

            <button onClick={AddExampleTask} className={`${style.btn} ${style.addbtn}`}>
            <img src="/assets/cursor.png" alt="cursor" />
            AddExampleTask
            </button>
        </div>

        <div className={style.filters}>
          {buttons.map((item,index)=>{
            return <button onClick={()=>{setactive(index); Filter(buttons,index)}} className={active == index? `${style.btn} ${style.active}` : `${style.btn}`}> {item} </button>
          })}
        </div>
        <table className={style.table}>
          <tr>
            <th>Post</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>Task name</th>
            <th>Date</th>
            <th>Priority</th>
          </tr>

            {search?filterlist.map((item)=>{
              return <Task data={data} setdata={setdata} item={item}/>
            }):tasks.map((item)=>{
              if(item.comlited){
                return <Task styles={{background: 'green',pointerEvents:'none'}} data={data} setdata={setdata} item={item}/>
              }
              else{
                return <Task data={data} setdata={setdata} item={item}/>
              }
              })}

        </table>
      </section>
    </main>
  )
}

export default App