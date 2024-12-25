
        // Hàm để chuyển đổi giữa các section
        function toggleSections() {
            var glanceSection = document.getElementById('glance');
            var fireEyesSection = document.getElementById('fireEyes');
            
            // Kiểm tra section hiện tại
            if (glanceSection.style.display === 'none') {
                glanceSection.style.display = 'flex'; // Hiển thị section #glance
                fireEyesSection.style.display = 'none'; // Ẩn section #fireEyes
            } else {
                glanceSection.style.display = 'none'; // Ẩn section #glance
                fireEyesSection.style.display = 'flex'; // Hiển thị section #fireEyes
            }
        }

        // Đặt thời gian tự động thay đổi giữa các section mỗi 5 giây
        setInterval(toggleSections, 5000); // Mỗi 5 giây sẽ chuyển đổi
    