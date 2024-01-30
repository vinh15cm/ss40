let formElement = documnet.querySelector("#form");
let inputElement = document.querySelector("#inputValue");
let listJob = JSON.parse(localStorage.getItem(jobs))
function render() {
    let ulHtmls = listJob.map(function (job) {
        return `
        <li>
        <span>$(job.name)<span>
        <button>sửa<button>
        <button>xóa<button>
        <li>
        `;
    });
}
function createJob() {
    // trong js có bao nhiêu giá trị mặc định là false :false , 0, null , undefined, NaN,""
    if (!inputElement.value) {
        alert(" tên công việc không đc để trống.")

    } else {
        // tạo đối tượng newJob
        const newJob = {
            id: Math.ceil(Math.random() * 100000000000),
            name: inputElement.value,
            status: false,
        };
        // push đối tượng newJob vào trong mảng 
        listJob.push(newJob);
        //lưu dữ liệu trên localStorage
        localStorage.setItem("jobs", JSON.stringify(listJob));
        //clear giá trị trong input
        inputElement.value = "";
    }
}
function deleteJob() { }
function updateJob() { }
//lắng nghe sự kiện submit form
formElement.addEventListener("submit", function () {
    //ngăn chặn sự kiện mặc định của form
    event.preventDefault();
    console.log("submit form");
});