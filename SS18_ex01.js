//T⭑ Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi,
//  địa chỉ và số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng trên

// B1: Tạo đối tượng
let person = {
  name: ` Nguyễn Văn A`,
  gender: `Nam`,
  address: ` Hải Phòng`,
  phone: 012345678,
};
// console.log(person);

// B2: In các key của object ra bằng vòng lặp for in
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log(`========================`);
// Dùng person[key] vì key sẽ lặp theo vòng lặp

//T⭑ ------------------------------------------------------------------------------
//T⭑ Bài 2: Viết chương trình tạo đối tượng student có cặp key và value
// tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các
// thuộc tính tương tự (value tự điền). Sau đó tạo mảng “students” để
// chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent”
// sau khi thêm vào mảng “students”

// B1 : Tạo đối tượng student có cặp key và value giống đề bài ra

let student = {
  id: 1,
  name: ` Nguyễn Văn A`,
  gender: ` Nam`,
  age: 20,
  mark: 8,
};
// Phân tích :
// id đang ở vị trí đầu của object , index : 0 trong mảng
// sẽ là students[0].id +1
// students [0] = students[students.length - 1]
// Vì có một phần tử nên length = 1
// ví dụ: ta thêm 1 phần tử nữa length = 2  - > id giá trị tiếp theo
// sẽ là studen[1].id +1

// console.log(student);
// for (let key in student) {
//   console.log(`${key}:${student[key]}`);
// }
// B2 : Tạo array students rồi thêm các object ở trên vào
let students = [];
students.push(student);
// console.log(students);
let newStudent;
// B3 tạo object newStudent
// cho người dùng nhập vào các value với giá trị key
// riêng id thì sẽ cho lần lượt tăng dần theo thứ tự thêm vào
let loop = true;
while (loop === true) {
  let nameInput = prompt(` Hãy nhập vào tên học sinh mới :`);
  let genderInput = prompt(` Hãy nhập vào giới tính :`);
  let ageInput = Number(prompt(` Nhập vào tuổi :`));
  let markInput = Number(prompt(` Nhập vào điểm toán :`));
  if (
    nameInput === `` ||
    genderInput === `` ||
    isNaN(ageInput) ||
    isNaN(markInput)
  ) {
    alert(` Bạn nhập không hợp lệ ! Hãy nhập lại`);
    continue;
  } else {
    newStudent = {
      id: students[students.length - 1].id + 1,
      name: nameInput,
      gender: genderInput,
      age: ageInput,
      mark: markInput,
    };
    students.push(newStudent);
    // console.log(newStudent);

    let confirmInput = confirm(` Bạn muốn tiếp tục nhập không? `);
    if (!confirmInput) {
      loop = false;
    }
    // dùng confirm có 2 lựa chọn là ok và cancle cho người dùng
    // chọn rất tiện

    for (let i = 0; i < students.length; i++) {
      for (key in students[i]) {
        console.log(`${key}:${students[i][key]}`);
      }
      console.log(`========================`);
    }
  }
}
//T⭑ -------------------------------------------------------------------------------
//T⭑ Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm cao nhất
//  và in ra toàn bộ thông tin của học sinh đó

// Phân tích : tìm học sinh có điểm cao nhất như thế nào ?
// 1.tạo vòng lặp for để cho chạy qua từng object trong array
// 2. điểm  = students[i].mark
// 3. ví dụ điểm ông sau cao hơn ông trước thì làm thế nào ?
// Tạo 1 biến là điểm cao nhất: maxMark
// cho ông ấy bằng với điểm ở index 0 maxMark = student[0].mark
// ông sau cao hơn thì cho ông sau bằng maxMark
//if(students[i].mark > maxMark) -> maxMark = {students[i].mark

let maxMark = students[0].mark;
let topStudent = student[0];

for (let i = 1; i < students.length; i++) {
  if (students[i].mark > maxMark) {
    maxMark = students[i].mark;
    topStudent = students[i];
  }
  console.log(`Điểm toán cao nhất là ${maxMark} của : `);
  for (let key in topStudent) {
    console.log(`${key}: ${topStudent[key]}`);
  }
}
