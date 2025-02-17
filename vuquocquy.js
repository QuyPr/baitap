// Vu Quoc Quy - 2180605948
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    // Tính điểm trung bình của từng sinh viên
    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    // Xếp loại sinh viên
    getRank() {
        let avg = this.getAverage();
        if (avg >= 8) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung bình";
        return "Yếu";
    }
}

// Tạo mảng gồm 4 sinh viên
let students = [
    new Student("QuyQuy", 20, 7, 8),
    new Student("Lan", 21, 9, 10),
    new Student("Minh", 19, 5, 6),
    new Student("Hùng", 22, 3, 4)
];

console.log("Xếp loại của từng sinh viên:");
students.map(student => console.log(`${student.name} - Xếp loại: ${student.getRank()}`));
let totalAverage = students.reduce((sum, student) => sum + student.getAverage(), 0) / students.length;
console.log(`Trung bình cộng điểm của cả lớp: ${totalAverage.toFixed(2)}`);
let hasUnder18 = students.some(student => student.age < 18);
console.log(`Có sinh viên nào dưới 18 tuổi không? ${hasUnder18 ? "Có" : "Không"}`);
let allHaveNames = students.every(student => student.name.trim() !== "");
console.log(`Cả lớp có đầy đủ tên không? ${allHaveNames ? "Có" : "Không"}`);
