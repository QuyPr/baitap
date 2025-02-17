// Vu Quoc Quy - 2180605948
// Định nghĩa class Student
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}

// Danh sách sinh viên
let students = [
    new Student("QuyQuy", 20, 7, 8),
    new Student("Lan", 21, 9, 10),
    new Student("Minh", 19, 5, 6),
    new Student("Hùng", 22, 3, 4)
];

// Hàm tạo Promise
function createPromise(delay) {
    return new Promise((resolve, reject) => {
        let randomNum = Math.floor(Math.random() * 11); // Random số từ 0-10
        console.log(`Số random (${delay}s):`, randomNum);

        setTimeout(() => {
            if (randomNum % 2 === 0) {
                let randomStudent = students[Math.floor(Math.random() * students.length)];
                resolve({ ...randomStudent, randomNum });
            } else {
                reject("Dữ liệu lỗi");
            }
        }, delay * 1000);
    });
}

// Tạo 2 Promise với thời gian chờ khác nhau
const promise1 = createPromise(2);
const promise2 = createPromise(4);

// Sử dụng Promise.all
Promise.all([promise1, promise2])
    .then(results => {
        console.log("Dữ liệu nhận được từ cả hai Promise:", results);
        console.log("Lấy dữ liệu hoàn thành");
    })
    .catch(error => {
        console.log("Lỗi:", error);
    });

// Sử dụng Promise.race
Promise.race([promise1, promise2])
    .then(result => {
        console.log("Dữ liệu nhận được từ Promise đầu tiên hoàn thành:", result);
        console.log("Đã lấy được dữ liệu");
    })
    .catch(error => {
        console.log("Lỗi:", error);
    });
