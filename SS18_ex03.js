// let todoList = [
//   {
//     id: 1,
//     content: `Xin việc ở Google`,
//     status: true,
//   },
//   {
//     id: 2,
//     content: `Mua biệt thự`,
//     status: true,
//   },
//   {
//     id: 3,
//     content: `Cưới vợ`,
//     status: false,
//   },
//   {
//     id: 4,
//     content: `Mua xe hơi`,
//     status: false,
//   },
//   {
//     id: 5,
//     content: `Sinh con`,
//     status: false,
//   },
//   {
//     id: 6,
//     content: `Đi du lịch vòng quanh thế giới`,
//     status: false,
//   },
// ];

let todoListDb = JSON.parse(localStorage.getItem(`dB`)) || [];

let ul = document.getElementById(`ul`);
let input = document.getElementById(`input`);
let btn = document.getElementById(`btn`);

btn.addEventListener(`click`, function () {
  {
    let newId =
      todoListDb.length > 0 ? todoListDb[todoListDb.length - 1].id + 1 : 1;

    let newTodo = {
      id: newId,
      content: input.value,
      status: false,
    };

    todoListDb.push(newTodo);
    localStorage.setItem(`dB`, JSON.stringify(todoListDb));
    render();
    input.value = "";
  }
});

function render() {
  ul.innerHTML = "";
  todoListDb.forEach(function (todo, i) {
    let li;
    if (todoListDb[i].status === true) {
      li = `<li data-index = ${i} class = "list-item checked">${todoListDb[i].content}
    <span class="close">×</span></li>`;
    } else {
      li = `<li data-index = ${i} class = "list-item">${todoListDb[i].content} <span class="close">×</span></li>`;
    }
    ul.innerHTML = ul.innerHTML + li;
  });

  let liList = document.getElementsByClassName(`list-item`);

  for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener(`click`, function () {
      let index = Number(liList[i].getAttribute(`data-index`));
      todoListDb[index].status = !todoListDb[index].status;
      localStorage.setItem(`dB`, JSON.stringify(todoListDb));
      ul.innerHTML = "";
      render();
    });
  }

  let spanList = document.getElementsByClassName(`close`);
  for (let i = 0; i < spanList.length; i++) {
    spanList[i].addEventListener(`click`, function (event) {
      event.stopPropagation();

      let deleteIndex = Number(this.parentElement.getAttribute(`data-index`));

      todoListDb.splice(deleteIndex, 1);
      localStorage.setItem(`dB`, JSON.stringify(todoListDb));
      ul.innerHTML = "";
      render();
    });
  }
}
