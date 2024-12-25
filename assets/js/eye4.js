document.addEventListener('DOMContentLoaded', () => {
    const blinkingEyeSection = document.getElementById('blinkingEye'); // Chỉ lấy phần tử với id="blinkingEye"
    const eyes = blinkingEyeSection.querySelectorAll('.eye');
    const iris = blinkingEyeSection.querySelectorAll('.iris');
    const upperLids = blinkingEyeSection.querySelectorAll('.upper-lid');
    const lowerLids = blinkingEyeSection.querySelectorAll('.lower-lid');

    function blink() {
        // Đóng mí mắt
        upperLids.forEach(lid => lid.style.transform = 'scaleY(1)');
        lowerLids.forEach(lid => lid.style.transform = 'scaleY(1)');
        eyes.forEach(eye => eye.classList.remove('active'));
        iris.forEach(eye => eye.classList.remove('active'));

        setTimeout(() => {
            // Mở mí mắt
            upperLids.forEach(lid => lid.style.transform = 'scaleY(0)');
            lowerLids.forEach(lid => lid.style.transform = 'scaleY(0)');
            eyes.forEach(eye => eye.classList.add('active'));
            iris.forEach(eye => eye.classList.add('active'));
        }, 1000); // Thời gian giữ mí mắt đóng
    }

    // Tự động nháy mắt mỗi 3 giây
    setInterval(blink, 3000);
});
