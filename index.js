// Tạo localStorage

// Kiểu dữ liệu JSON
// Sự khác nhau giữa JSON và Object

const user = {
    id: 1,
    name: "Nguyễn Văn A",
};

const users = [
    {
        id: 1,
        name: "Hùng",
    },
    {
        id: 2,
        name: "Bảo",
    },
];

// Cách chuyển đổi từ kiểu JS sang kiểu JSON
let userJson = JSON.stringify(user);
console.log("Dữ liệu JSON: ", userJson);

// Cách chuyển đổi từ JSON sang JS
let userJS = JSON.parse(userJson);
console.log("Dữ liệu JS: ", userJS);

// Thêm dữ liệu lên localStorage
localStorage.setItem("user", userJson);
localStorage.setItem("users", JSON.stringify(users));

// Lấy dữ liệu từ localStorage
let userLocal = JSON.parse(localStorage.getItem("user"));
// JSON.parse(userLocal)
console.log("userLocal: ", userLocal);

// Xóa dữ liệu khỏi localStorage
localStorage.removeItem("user");

// Xóa tất cả key khỏi localStorage
localStorage.clear();

// Xây dựng ứng dụng Todolist
// 1. Thêm mới công việc và lưu lên localStorage
// Thiết kế dữ liệu cho đối tượng công việc: name, status, id
// 2. Hiển thị danh sách công việc ra ngoài giao diện
// 3. Xóa công việc
// 4. Sửa công việc

// Session Storage
// Tạo session Storage
const userLogin = {
    id: 1234,
    name: "Nguyễn Văn A",
};

// sessionStorage.setItem("userLogin", JSON.stringify(userJson));
