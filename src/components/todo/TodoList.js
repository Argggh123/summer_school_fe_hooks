import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      todoList: [
        {
          name: 'Придти на лекцию',
          description: 'Придти на лекцию летней школы по React хукам',
          isDone: true,
        },
        {
          name: 'Послушать лектора',
          description: 'Прослушать занятие и впитать знание',
          isDone: true,
        },
        {
          name: 'Поделать практику',
          description: 'Поделать практику по созданию хуков',
          isDone: false,
        },
        {
          name: 'Написать пользовательский хук',
          description: 'Создать свой собственный хук',
          isDone: false,
        },
        {
          name: 'Выполнить ДЗ',
          description: 'Выполнить домашнее задание по хукам',
          isDone: false,
        },
      ],
    };
  }

  tick() {
    this.setState((prevState) => (
      {
        ...prevState,
        date: new Date(),
      }
    ));
  }

  checkTodoHandler(key) {
    const todos = this.state.todoList.concat();
    todos[key].isDone = !todos[key].isDone;
    this.setState((prevState) => (
      {
        ...prevState,
        todoList: todos,
      }
    ));
  }

  getTodoList(todolist) {
    return todolist.map((item, key) => (
      <TodoItem
        todo={item}
        key={`todo-item-${key}`}
        checkHandler={this.checkTodoHandler.bind(this, key)}
      />
    ));
  }

  componentDidMount() {
    this.timer = setInterval(
      () => {
        this.tick();
      }, 1000);
    console.log('запускаем таймер');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('удаляем таймер');
  }

  render() {
    return (
      <>
        <h1>
            Привет! Сейчас: {this.state.date.toLocaleString()}
        </h1>
        <div className="todo-list">
          <h2>Список дел:</h2>
          {this.getTodoList(this.state.todoList)}
        </div>
        </>
    );
  }
}

export default TodoList;
