import React, {useState} from "react";

function TodoList(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(props.name);

    function handleSubmit(e) {
        e.preventDefault();        
        props.editTask(props.id, newName);
        setNewName(newName);
        setEditing(false);
    }

      function handleChange(e) {
        setNewName(e.target.value);
      }
      
    const editingTemplate = (
      <div className="form-edit-main">
        <form className="form-edit" onSubmit={handleSubmit}>
            <input id={props.id} className="todo-label" required autoFocus autocomplete="off" defaultValue={"hello"} value={newName} onChange={handleChange}/>   
          <div className="btn-group-edit">
          <button type="submit" title="Confirm" className="btn edit-confirm" >
            <i className="fa fa-check"></i>
            </button>
            <button type="button" title="Cancel" className="btn edit-cancel" onClick={() => setEditing(false)}> 
            <i className="fa fa-times"></i>
            </button>
            </div>
        </form>
        </div>
      );
      const viewTemplate = (
        <div className="form-view-main">
          <div className="cb-wrapper">
            <div className="cb-input">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
                readOnly
              />
              </div>
              <label style={ props.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}} className="todo-label" htmlFor={props.id} >
                {props.name}
              </label>
              </div>
            <div className="btn-group">
              <button type="button" title="Edit" className="btn todo-edit" onClick={()=> setEditing(true)}>
              <i className="fa fa-edit"></i>
              </button>
              <button
                type="button"
                title="Delete"
                className="btn todo-cancel"
                onClick={() => props.deleteTask(props.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
            </div>
      );
      
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default TodoList;