//สร้างร้านหนังสือ จาก prompt()

var menu;

var books = [
  {
    name: "Harry Potter",
    author: "J. K. Rowling",
    year: 1997,
    price: 230,
  },
];

function mainmenu() {
  do {
    menu = prompt(
      "เลือกเมนูเพื่อทำรายการ\n1. เพิ่มรายการหนังสือ\n2. แสดงรายการหนังสือ\n3. แก้ไขรายการหนังสือ\n4. ลบหนังสือ\n0. ออกจากระบบ"
    );
    switch (menu) {
      case "1":
        addBook();
        break;
      case "2":
        showBook();
        break;
      case "3":
        editBook();
        break;
      case "4":
        deleteBook();
        break;
      case "0":
        break;
    }
  } while (menu != "0");
}

function addBook() {
  var book = {};
  book.name = prompt("เพิ่มชื่อหนังสือ");
  book.author = prompt("เพิ่มชื่อผู้แต่ง");
  book.year = prompt("เพิ่มปีที่พิมพ์");
  book.price = prompt("เพิ่มราคา");
  books.push(book);
  alert(
    "เพิ่มข้อมูลเรียบร้อยแล้ว \n รายการหนังสือทั้งหมด " + books.length + " เล่ม"
  );
  mainmenu();
}

function showBook() {
  var text = "";
  books.forEach(function (item, index) {
    text +=
      (index + 1) +
      " " +
      item.name +
      " " +
      item.author +
      " " +
      item.year +
      " " +
      item.price +
      "\n";
  });
  alert('รายการหนังสือ \n' +text);
  mainmenu();
}

function editBook() {
    var text = "";
  books.forEach(function (item, index) {
    text +=
      (index + 1) +
      " " +
      item.name +
      " " +
      item.author +
      " " +
      item.year +
      " " +
      item.price +
      "\n";
  });
  var edit = prompt("เลือกหมายเลขหนังสือที่จะแก้ไข \n" + text);
  books[edit].name = prompt("ชื่อหนังสือ");
  books[edit].author = prompt("ชื่อผู้แต่ง");
  books[edit].year = prompt("ปีที่พิมพ์");
  books[edit].price = prompt("ราคา");
  alert("แก้ไขข้อมูลเรียบร้อยแล้ว");
  mainmenu();
}

function deleteBook() {
    var text = "";
    books.forEach(function (item, index) {
      text +=
        (index + 1) +
        " " +
        item.name +
        " " +
        item.author +
        " " +
        item.year +
        " " +
        item.price +
        "\n";
    });
  var del = prompt("เลือกหมายเลขหนังสือที่จะลบ \n" + text);
  books.splice(del - 1, 1);
  alert("ลบข้อมูลเรียบร้อยแล้ว");
  mainmenu();
}

mainmenu();
