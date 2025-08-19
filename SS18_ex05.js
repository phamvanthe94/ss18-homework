let students = [];

function renderStudents(filter) {
  if (filter === undefined) filter = "";

  let tbody = document.getElementById("student-list");
  tbody.innerHTML = "";

  let filteredStudents = students.filter(function (student) {
    return student.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  });

  filteredStudents.forEach(function (student, index) {
    let row = document.createElement("tr");

    row.innerHTML =
      "<td>" +
      student.name +
      "</td>" +
      "<td>" +
      student.age +
      "</td>" +
      "<td>" +
      student.className +
      "</td>" +
      "<td>" +
      "<button class='edit' onclick='editStudent(" +
      index +
      ")'>Sửa</button>" +
      "<button class='delete' onclick='deleteStudent(" +
      index +
      ")'>Xóa</button>" +
      "</td>";

    tbody.appendChild(row);
  });
}

function addStudent() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let className = document.getElementById("className").value.trim();

  if (!name || !age || !className) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  students.push({
    name: name,
    age: Number(age),
    className: className,
  });

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("className").value = "";

  renderStudents();
}

function deleteStudent(index) {
  if (confirm("Bạn có chắc muốn xóa sinh viên này không?")) {
    students.splice(index, 1);
    renderStudents();
  }
}

document.getElementById("search").addEventListener("input", function () {
  let keyword = this.value;
  renderStudents(keyword);
});

function editStudent(index) {
  let student = students[index];
  let newName = prompt("Nhập tên mới:", student.name);
  let newAge = prompt("Nhập tuổi mới:", student.age);
  let newClass = prompt("Nhập lớp mới:", student.className);

  if (newName && newAge && newClass) {
    students[index] = {
      name: newName,
      age: Number(newAge),
      className: newClass,
    };
    renderStudents();
  }
}
