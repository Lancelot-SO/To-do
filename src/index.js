import './style.css';

const TodoList = document.querySelector('.todo-content');

const List = [
  {
    description: 'JavaScript is good for web development',
    tasksCompleted: false,
    index: 0,
  },
  {
    description: 'Wash the dishes',
    tasksCompleted: false,
    index: 1,
  },
  {
    description: 'Complete To Do list ptoject',
    tasksCompleted: false,
    index: 2,
  },
  {
    description: 'Learn HTML',
    tasksCompleted: false,
    index: 3,
  },
];

let display = ' ';
const populateHtml = (item) => {
  item.forEach((elem) => {
    display += `
    <div class="todo-tick flex">
    <div class="checkbox">
      <input
        type="checkbox"
        id="check"
        name="To-Do"
        value="Add"
      />
      <label for="todo">${elem.description}</label><br/>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <hr />`;
  });
  TodoList.innerHTML = display;
};
populateHtml(List);
