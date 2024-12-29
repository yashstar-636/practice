import React,{useState,useEffect} from 'react'
import Task from './Task';


const Home = () => {
  const intialArray = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
  const [tasks, setTasks] = useState(intialArray);
  const [tiitle,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const submithandler = (e) =>{
    e.preventDefault();
    setTasks([...tasks,{
      tiitle, 
      description
    }]);
    setTitle("");
    setDescription("");
  }
  const deletetask = (index) => {
    const filteredArr = tasks.filter((val,i)=>{
      return i!==index;
    })
    setTasks(filteredArr);
  }

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);
    return (
    <div className='container'>
      <h1>Daily Goals</h1>
      <form onSubmit={submithandler}>
        <input type='text' placeholder='tiitle' value={tiitle} 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea placeholder='Description' value={description} 
        onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        <button type='submit'>Add</button>
      </form>
      {tasks.map((item, index)=>(
        <Task key={index} title={item.tiitle} description={item.description}
        deletetask={deletetask}
        index={index}/>
      ))}
    </div>
  );

};

export default Home ;