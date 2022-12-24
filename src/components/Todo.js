import React, {useState} from "react";

function Todo(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
      }
      
      function handleChange(e) {
        setNewName(e.target.value);
      }
      
      console.log(props.date)
    const editingTemplate = (
        <form className="form-editing-main" onSubmit={handleSubmit}>
          <div className="form-editing-group">
            <label className="todo-label" htmlFor={props.id}>
              New name for {props.name}
            </label>
            <input id={props.id} className="todo-text" type="text" value={newName} onChange={handleChange}/>
          </div>
          <div className="btn-group">
            <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary todo-edit">
              Save
            </button>
          </div>
        </form>
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
              />
              </div>
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
              </div>
            <div className="btn-group">
              <button type="button" className="btn todo-edit" onClick={()=> setEditing(true)}>
              <i class="fa fa-edit"></i>
              </button>
              <button
                type="button"
                className="btn todo-cancel"
                onClick={() => props.deleteTask(props.id)}
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
            </div>
      );
      
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;