// importing all the required hooks
import React, { useEffect, useRef } from "react";
// importing all the css files
import Classes from "./AddTask.module.css";

// creating a component for adding a new Task
const AddTask = (props) => {
  // using useRef hook for inputs
  const title = useRef();

  // using useEffect hook for checking whether we are in edinting stage or not
  useEffect(() => {
    title.current.value = props.isEdit.edit ? props.isEdit.task.title : "";
  }, [props.isEdit]);
  return (
    // creating a container for the form
    <div className={Classes.taskContainer}>
      {/* creating up a form  */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addtask(title.current.value);
          title.current.value = "";
        }}
      >
        <div className="inside-box">
          <label>List of task💪 </label>
          <br />
          <input
            ref={title}
            type="text"
            required
            placeholder="Enter the task..."
          />
        </div>
        <div>
          {/* checking for editing state or not */}
          {props.isEdit.edit ? (
            <button
              type="button"
              onClick={() => {
                const task = props.isEdit.task;
                task.title = title.current.value;
                props.updateHandler(task, false);
              }}
            >
              Update Task
            </button>
          ) : (
            <button type="submit">ADD TASK</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTask;
