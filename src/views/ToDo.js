import React, {useState,useEffect} from 'react'
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import FilterButton from '../components/FilterButton';
import { nanoid } from "nanoid";

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
  };
  
const FILTER_NAMES = Object.keys(FILTER_MAP);

const ToDo = () => {
document.body.className="todo-body";
const [filter, setFilter] = useState('All');
const [tasks, setTasks] = useState(()=>{
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks){
    return JSON.parse(savedTasks);
  }else{
    return [];
  }
});

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);

const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask]);
  }
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
    
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName, completed:false}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
  <TodoList
    id={task.id}
    name={task.name.trim()}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
  return (
      <div className="todoapp-main">
        <div className="header">
        <h1><img src="../check.png" alt="check" border="0"/>Do It</h1>
        </div>
        <Form addTask={addTask}/>
        <br></br>
        <div className="filters">
        {filterList}
        </div>
        <div className="todoapp-down">
        <div className="todo-list">
          {taskList}
        </div>
        </div>
      </div>
  );
}
 
export default ToDo;