import React from 'react';
import './TaskItem.css';

function CompletedTaskItem(props) {
  const { task, handleDeleteButton } = props;

  return (
    <div className="ui segment taskitem-bdy">
      <div className="ui ">
        <label>{task}</label>
      </div>
      <button
        onClick={() => handleDeleteButton(task)}
        className="ui button red"
      >
        <i className="trash icon"></i>
      </button>
    </div>
  );
}

export default CompletedTaskItem;
