import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [date, setDate] = useState(new Date());
  const [todoList, setTodoList] = useState([
    {
      name: "Придти на лекцию",
      description: "Придти на лекцию летней школы по React хукам",
      isDone: true,
    },
    {
      name: "Послушать лектора",
      description: "Прослушать занятие и впитать знание",
      isDone: true,
    },
    {
      name: "Поделать практику",
      description: "Поделать практику по созданию хуков",
      isDone: false,
    },
    {
      name: "Написать пользовательский хук",
      description: "Создать свой собственный хук",
      isDone: false,
    },
    {
      name: "Выполнить ДЗ",
      description: "Выполнить домашнее задание по хукам",
      isDone: false,
    },
  ]);

  const tick = () => {
    setDate(new Date());
  };

  const checkTodoHandler = (key) => {
    const todos = todoList.concat();
    todos[key].isDone = !todos[key].isDone;
    setTodoList(todos);
  };

  const getTodoList = (todolist) => {
    return todolist.map((item, key) => (
      <TodoItem
        todo={item}
        key={`todo-item-${key}`}
        checkHandler={() => checkTodoHandler(key)}
      />
    ));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);
    console.log("запускаем таймер");
    return () => {
      clearInterval(timer);
      console.log("удаляем таймер");
    };
  }, []);

  return (
    <>
      <h1>Привет! Сейчас: {date.toLocaleString()}</h1>
      <div className="todo-list">
        <h2>Список дел:</h2>
        {getTodoList(todoList)}
      </div>
    </>
  );
};

export default TodoList;
