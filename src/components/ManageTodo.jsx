import React from "react";

const ManageTodo = ({ taskTitleRef, taskDescriptionRef, mangeTodoHandler, isId, todosButtonHandler, completeButtonHandler, unCompleteButtonHandler, setTodomapStatus }) => {
  return (
    <>
      <h1 className="text-blue-600  font-extrabold text-[200%] justify-center flex pb-2">To-Do-List</h1>
      <form onSubmit={mangeTodoHandler}>
        <div className="flex">
          <input className="outline-none border  border-black px-3 py-1 w-[92%] rounded-lg flex flex-1 mb-4" type="text" placeholder="Enter a Task Name" ref={taskTitleRef} />
        </div>
        <div className="flex">
          <input className="outline-none border  border-black px-3 py-1 w-[92%] rounded-lg flex flex-1 mb-4" type="text" placeholder="Enter Description" ref={taskDescriptionRef} />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="border  border-black rounded-md px-5  bg-green-400 mb-4 ">
            {isId ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <select className="border border-black outline-none cursor-pointer" onChange={(event) => setTodomapStatus(event.target.value)}>
        <option value="all todo">All Todos</option>
        <option value="true">Completed</option>
        <option value="false">Uncompleted</option>
      </select>
    </>
  );
};

export default ManageTodo;
