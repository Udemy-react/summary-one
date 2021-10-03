import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [cancelModal, setCancelModal] = useState(false);

  const deleteHandler = () => {
    setCancelModal(true);
  };

  const showModalHandler = () => {
    setCancelModal(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button onClick={deleteHandler} className="btn">
          Delete
        </button>
      </div>
      {cancelModal && <Modal onClick={showModalHandler}/>}
      {cancelModal && <Backdrop onClick={showModalHandler}/>}
    </div>
  );
};

export default Todo;
