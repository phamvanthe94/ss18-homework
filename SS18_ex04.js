const keyboard = document.getElementById(`keyboard`);
const display = document.getElementById(`display`);

const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);

letters.forEach(function (letter) {
  const btn = document.createElement(`button`);
  btn.textContent = letter;

  btn.addEventListener(`click`, function () {
    display.value = display.value + letter;
  });
  keyboard.appendChild(btn);
});

const deleteBtn = document.createElement(`button`);
deleteBtn.textContent = ` Xóa`;
deleteBtn.classList.add(`delete`);

deleteBtn.addEventListener(`click`, function () {
  display.value = display.value.slice(0, -1);
});

keyboard.appendChild(deleteBtn);
