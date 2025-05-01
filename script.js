document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Dynasty tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Gallery
    const galleryContainer = document.getElementById('gallery-container');
    const galleryImages = [
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Văn%20Miếu', caption: 'Văn Miếu Quốc Tử Giám - Hà Nội' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Cố%20Đô%20Huế', caption: 'Cố đô Huế - Di sản văn hóa thế giới' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Hội%20An', caption: 'Phố cổ Hội An - Di sản văn hóa thế giới' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Hạ%20Long', caption: 'Vịnh Hạ Long - Kỳ quan thiên nhiên thế giới' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Mỹ%20Sơn', caption: 'Thánh địa Mỹ Sơn - Di tích văn hóa Chăm Pa' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Điện%20Biên', caption: 'Di tích lịch sử Điện Biên Phủ' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Khai%20Định', caption: 'Lăng vua Khải Định - Huế' },
        { src: 'https://placeholder.pics/svg/400x300/DEDEDE/555555/Bái%20Đính', caption: 'Chùa Bái Đính - Ninh Bình' }
    ];
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}">
            <div class="gallery-caption">${image.caption}</div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
    
    // Event modal
    const modal = document.getElementById('event-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    const eventDetails = {
        'bach-dang': {
            title: 'Trận Bạch Đằng (938)',
            content: `
                <img src="https://placeholder.pics/svg/800x400/DEDEDE/555555/Trận%20Bạch%20Đằng" alt="Trận Bạch Đằng" style="margin-bottom: 1rem;">
                <p>Trận Bạch Đằng năm 938 là một trận đánh lịch sử diễn ra trên sông Bạch Đằng (nay thuộc địa phận thành phố Hải Phòng và tỉnh Quảng Ninh), giữa quân Nam Hán do Lưu Hoằng Tháo chỉ huy và quân Việt do Ngô Quyền lãnh đạo.</p>
                <p>Ngô Quyền đã cho quân cắm cọc gỗ có bịt sắt nhọn dưới lòng sông, khi thủy triều lên thì cho thuyền nhỏ ra khiêu chiến, dụ thuyền giặc đuổi theo, đến khi thủy triều rút, thuyền giặc bị mắc cạn và bị cọc đâm thủng, quân Việt từ hai bên bờ sông đánh ra, tiêu diệt hoàn toàn quân Nam Hán.</p>
                <p>Chiến thắng Bạch Đằng năm 938 đã chấm dứt thời kỳ Bắc thuộc kéo dài hơn 1000 năm của dân tộc Việt Nam, mở ra kỷ nguyên độc lập tự chủ. Ngô Quyền lên ngôi vua, đặt kinh đô ở Cổ Loa, mở ra thời kỳ nhà Ngô trong lịch sử Việt Nam.</p>
            `
        },
        'chi-lang': {
            title: 'Trận Chi Lăng - Xương Giang (1427)',
            content: `
                <img src="https://placeholder.pics/svg/800x400/DEDEDE/555555/Trận%20Chi%20Lăng" alt="Trận Chi Lăng" style="margin-bottom: 1rem;">
                <p>Trận Chi Lăng - Xương Giang là một chiến dịch quân sự lớn diễn ra từ tháng 8 đến tháng 12 năm 1427, giữa quân Đại Việt do Lê Lợi chỉ huy và quân Minh do Liễu Thăng, Mộc Thạnh chỉ huy.</p>
                <p>Tại ải Chi Lăng (Lạng Sơn), quân Lê Lợi đã phục kích và tiêu diệt đạo quân của Liễu Thăng. Sau đó, quân Đại Việt tiếp tục đánh bại đạo quân của Mộc Thạnh tại Xương Giang (Bắc Giang).</p>
                <p>Chiến thắng Chi Lăng - Xương Giang đã buộc nhà Minh phải chấp nhận hòa hoãn, công nhận nền độc lập của Đại Việt. Đây là chiến thắng quyết định, mở đường cho việc quét sạch quân Minh ra khỏi bờ cõi, khôi phục nền độc lập dân tộc sau 20 năm bị đô hộ.</p>
            `
        },
        'dien-bien-phu': {
            title: 'Chiến dịch Điện Biên Phủ (1954)',
            content: `
                <img src="https://placeholder.pics/svg/800x400/DEDEDE/555555/Điện%20Biên%20Phủ" alt="Điện Biên Phủ" style="margin-bottom: 1rem;">
                <p>Chiến dịch Điện Biên Phủ diễn ra từ ngày 13/3 đến ngày 7/5/1954, là chiến dịch quân sự lớn nhất của Quân đội Nhân dân Việt Nam trong cuộc kháng chiến chống thực dân Pháp (1945-1954).</p>
                <p>Dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp, quân đội Việt Nam đã đánh bại tập đoàn cứ điểm Điện Biên Phủ - một pháo đài được coi là bất khả xâm phạm của thực dân Pháp do tướng De Castries chỉ huy.</p>
                <p>Chiến thắng Điện Biên Phủ đã buộc Pháp phải ký Hiệp định Genève (1954), chấm dứt cuộc chiến tranh xâm lược Đông Dương, công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào và Campuchia.</p>
                <p>Chiến thắng này không chỉ có ý nghĩa to lớn đối với Việt Nam mà còn là một sự kiện có tầm quan trọng quốc tế, cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới.</p>
            `
        },
        'giai-phong': {
            title: 'Giải phóng miền Nam (30/4/1975)',
            content: `
                <img src="https://placeholder.pics/svg/800x400/DEDEDE/555555/Giải%20Phóng%20Miền%20Nam" alt="Giải phóng miền Nam" style="margin-bottom: 1rem;">
                <p>Chiến dịch Hồ Chí Minh là chiến dịch quân sự cuối cùng của Quân đội Nhân dân Việt Nam trong cuộc kháng chiến chống Mỹ, diễn ra từ ngày 26/4 đến ngày 30/4/1975.</p>
                <p>Dưới sự chỉ huy của Đại tướng Văn Tiến Dũng, quân đội Việt Nam đã tiến công và giải phóng Sài Gòn - thủ đô của chính quyền Việt Nam Cộng hòa. Lá cờ giải phóng được kéo lên trên Dinh Độc Lập (nay là Dinh Thống Nhất) vào trưa ngày 30/4/1975, đánh dấu sự kết thúc của cuộc kháng chiến chống Mỹ kéo dài 21 năm.</p>
                <p>Chiến thắng 30/4/1975 đã hoàn toàn giải phóng miền Nam, thống nhất đất nước, đưa cả nước đi lên chủ nghĩa xã hội. Đây là một trong những sự kiện vĩ đại nhất trong lịch sử dân tộc Việt Nam.</p>
            `
        }
    };
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            const event = eventDetails[eventId];
            
            if (event) {
                modalContent.innerHTML = `
                    <h2>${event.title}</h2>
                    ${event.content}
                `;
                
                modal.style.display = 'block';
            }
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Scroll animation for timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkScroll() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial styles for timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});