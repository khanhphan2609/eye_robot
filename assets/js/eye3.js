
// Các đường dẫn hình ảnh ngọn lửa
const flameImages = [
    '/assets/img/fire1.png',  // Hình ảnh ngọn lửa 1
    '/assets/img/fire2.png',  // Hình ảnh ngọn lửa 2
];

// Hàm thay đổi ngọn lửa
function changeFlame() {
    const leftFlame = document.getElementById('flame-left');
    const rightFlame = document.getElementById('flame-right');

    // Lấy chỉ số ngẫu nhiên từ danh sách ảnh ngọn lửa
    const randomIndex = Math.floor(Math.random() * flameImages.length);

    // Cập nhật background-image của hai mắt
    leftFlame.style.backgroundImage = `url(${flameImages[randomIndex]})`;
    rightFlame.style.backgroundImage = `url(${flameImages[randomIndex]})`;
}

// Thay đổi ngọn lửa mỗi 100ms
setInterval(changeFlame, 100);