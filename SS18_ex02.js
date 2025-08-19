//T⭑  Bài 1

// let products = [
//   {
//     id: 1,
//     name: `Milk`,
//     count: 100,
//   },
//   {
//     id: 2,
//     name: `Orange`,
//     count: 100,
//   },
//   {
//     id: 3,
//     name: `Butter`,
//     count: 100,
//   },
// ];

// // B1: Tạo 1 object mới có key : value giống như đề bài cho
// let newsDish = {
//   id: 4,
//   name: `Fish`,
//   count: 100,
// };

// // B2:Thêm object vào arr
// // In thử bằng forEach ra xem được chưa?
// products.push(newsDish);
// // products.forEach(function (products, index) {
// //   console.log(` ---- Sản phẩm ${index + 1} ----  `);
// //   console.log(`id: ${products.id}`);
// //   console.log(`name: ${products.name}`);
// //   console.log(`count: ${products.count}`);
// // });

// // B4: Dùng vòng lặp for để tìm xem đối tượng có id là 2 ở đâu
// // thì xóa object chứa đối tượng ấy đi
// for (let i = 0; i < products.length; i++) {
//   if (products[i].id === 2) {
//     products.splice(i, 1);
//   }
// }
// // console.log(products);
// // B5: Truy vấn đến đối tượng có id =3 , cập nhật giá trị count=0
// for (let i = 0; i < products.length; i++) {
//   if (products[i].id === 3) {
//     products[i].count = 0;
//   }
// }
// // console.log(products);

// // B6: Kiểm tra từ khóa `Butter` Có trong array product hay không ?
// let found = false;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].name === `Butter`) {
//     console.log(products[i]);
//     found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log(`Không có dữ liệu bạn tìm kiếm`);
// }

//T⭑ ----------------------------------------------------------------------------
//T⭑ Bài 2

let courses = [
  {
    id: 1,
    name: `HTML`,
    Complete: false,
  },
  {
    id: 2,
    name: `CSS`,
    Complete: false,
  },
  {
    id: 3,
    name: `Basic of javascript`,
    Complete: false,
  },
  {
    id: 4,
    name: `packafe Manager (npm)`,
    Complete: false,
  },
  {
    id: 5,
    name: `Git`,
    Complete: false,
  },
];

// courses.forEach(function (courses) {
//   console.log(`${courses.id}.${courses.name}`);
//   console.log(`Complete : ${courses.Complete}`);
//   console.log(``);
// });

// Tạo luôn function in ra để tí sử dụng luôn cho tiện
function printCourses() {
  courses.forEach(function (course) {
    console.log(`${course.id}.${course.name}`);
    console.log(`Complete : ${course.Complete}`);
    console.log(``);
  });
}
// B1: Cho người dùng chọn 1 trong 5 chữ cái C/R/U/D/E
let loop = true;
while (loop === true) {
  let choise = prompt(
    ` Hãy nhập vào 1 trong 5 chữ cái C/R/U/D/E`
  ).toLocaleUpperCase();

  // B2: Vì so sánh một biến với nhiều giá trị khác nhau nên
  // sẽ dùng switch - case
  // B3: trong trường hợp người dùng chọn C
  switch (choise) {
    case `C`:
      let courseNameInput = prompt(` Hãy nhập vào tên khóa học mới :`);
      let courseCompleteInput = prompt(
        `Hoàn thành (true/false)`
      ).toLocaleLowerCase();
      let newCourse = {
        id: courses.length + 1,
        name: courseNameInput,
        Complete: courseCompleteInput,
      };
      courses.push(newCourse);
      printCourses();
      break;
    // B4: trong trường hợp người dùng chọn R
    case `R`:
      printCourses();
      break;
    // B5: trong trường hợp người dùng chọn U
    case `U`:
      let coursesIndexInput =
        Number(prompt(`Hãy nhập vị trí bạn muốn cập nhật`)) - 1;
      if (0 <= coursesIndexInput && coursesIndexInput < courses.length) {
        let newName = prompt(` Hãy nhập tên môn học bạn muốn cập nhật `);
        let newStatus = prompt(
          ` Hãy nhập trạng thái bạn muốn cập nhật (true/false)`
        );
        courses[coursesIndexInput] = {
          id: courses[coursesIndexInput].id,
          name: newName,
          Complete: newStatus,
        };
        console.log(`Danh sách sau khi cập nhật:`);
        printCourses();
      } else console.log(` Vị trí bạn muốn cập nhật không tồn tại`);
      break;
    // B6: trong trường hợp người dùng chọn D
    case `D`:
      let deleteIndexInput =
        Number(prompt(` Hãy nhập vào vị trí khóa học bạn muốn xóa `)) - 1;
      if (0 <= deleteIndexInput && deleteIndexInput < courses.length) {
        courses.splice(deleteIndexInput, 1);
        printCourses();
      }
      break;
    // B7: trong trường hợp người dùng chọn E
    case `E`:
      console.log(`Cảm ơn bạn đã đến với Rikkei Academy`);
      loop = false;
      break;

    default:
      alert(` Giá trị bạn điền vào không hợp lệ!`);
  }
}
