import React, { useEffect, useRef, useState } from "react";
import ToDoItems from "./ToDoItems";
import { toast } from "react-toastify";
import ManageTodo from "./ManageTodo";

const localData = localStorage.getItem("todo");

function ToDo() {
  const [todomapStatus, setTodomapStatus] = useState("all todo");
  const [isId, setIsId] = useState();
  const [todoList, setTodoList] = useState(
    localData ? JSON.parse(localData) : []
  );

  const taskTitleRef = useRef();
  const taskDescriptionRef = useRef();

  const mangeTodoHandler = (e) => {
    e.preventDefault();
    const inputTitle = taskTitleRef.current.value.trim();
    const inputDescription = taskDescriptionRef.current.value.trim();

    if (isId) {
      todoList.map((val, index) => {
        if (val.id === isId) {
          val.inputTitle = taskTitleRef.current.value;
          val.description = taskDescriptionRef.current.value;
          val.dateAndTime = new Date().toLocaleString();
        }
      });
    } else {
      if (inputTitle == "" || inputDescription == "") {
        toast.error("Plz Enter The Task");
      } else {
        const newTodo = {
          id: Date.now(),
          inputTitle: inputTitle,
          description: inputDescription,
          status: false,
          dateAndTime: new Date().toLocaleDateString(),
        };
        setTodoList((prev) => [...prev, newTodo]);
      }
    }
    taskTitleRef.current.value = "";
    taskDescriptionRef.current.value = "";
    setIsId(null);
  };

  //------------DELETE-------------//
  const deleteHandler = (id) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  //===========COMPLETE TIK================//
  const completeTikHandler = (id) => {
    setTodoList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        } else {
          return item;
        }
      });
    });
  };

  // ===============EIDIT==============//
  const editHandler = (id) => {
    const editTodo = todoList.find((value) => value.id === id);
    console.log(editTodo);
    taskTitleRef.current.value = editTodo.inputTitle;
    taskDescriptionRef.current.value = editTodo.description;
    setIsId(id);
  };

  const filteredTodos = todoList.filter((value, index) => {
    if (todomapStatus == "all todo") {
      return value;
    }
    if (todomapStatus == "true") {
      return value.status == true;
    }
    if (todomapStatus == "false") {
      return value.status == false;
    }
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="flex justify-center mt-[5%] bg-stone-900 pb-10">
        <div className="border pt-4  px-12 min-h-[50%]  min-w-[40%] bg-white rounded-lg pb-[2%]">
          <ManageTodo
            taskTitleRef={taskTitleRef}
            taskDescriptionRef={taskDescriptionRef}
            mangeTodoHandler={mangeTodoHandler}
            isId={isId}
            setTodomapStatus={setTodomapStatus}
          />

          {filteredTodos.map((item, ind) => {
            return (
              <ToDoItems
                key={ind}
                inputTitle={item.inputTitle}
                description={item.description}
                deleteTodo={deleteHandler}
                id={item.id}
                completeTikHandler={completeTikHandler}
                status={item.status}
                dateAndTime={item.dateAndTime}
                editHandler={editHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDo;
