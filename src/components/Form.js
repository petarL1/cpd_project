import React, {useState} from "react";

function Form(props){
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(!name){
            alert("Enter a name")
        }else{
        props.addTask(name);
        setName("");
        }
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return(
    <div className="form-wrapper">
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
        </h2>
        <input
          placeholder="Add a new task"
          type="text"
          className="form-input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" onClick={() => handleSubmit} className="btn btn-add">
          <i class="fa fa-plus"></i>
        </button>
      </form>
      </div>
    )
}

export default Form;