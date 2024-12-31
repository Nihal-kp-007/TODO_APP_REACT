import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

const ToDoItems = ({ inputTitle, description, deleteTodo, id, completeTikHandler, status, dateAndTime, editHandler }) => {
  return (
    <>
      <div className="flex items-center my-3 gap-2 border rounded-lg ">
        <div className="flex flex-1 items-center cursor-pointer ">
          <div className=" w-[90px]">{status ? <p className="text-slate-700  text-[17px] ml-3 line-through decoration-green-600 decoration-2	my-[0] font-extrabold">{inputTitle}</p> : <p className="text-slate-700 my-[0] text-[17px] ml-3 font-extrabold ">{inputTitle}</p>}</div>
          <div>{status ? <p className="text-slate-700  text-[17px] ml-3 line-through decoration-2 my-[0]	 decoration-green-600">{description}</p> : <p className="text-slate-700 my-[0] text-[17px] ml-3 ">{description}</p>}</div>
        </div>
        <div>
          <span className="ms-auto">{dateAndTime}</span>
        </div>
        <div>
          <button onClick={()=>completeTikHandler(id)}>
            <IoMdDoneAll />
          </button>
        </div>
        <div>
          <button onClick={() =>editHandler(id)}>
            <FaUserEdit />
          </button>
        </div>
        <div>
          <button className="bg-red-500 px-3 py-1"onClick={() => {deleteTodo(id);}}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItems;
