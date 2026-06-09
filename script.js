// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 预加载动画
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    });

    // 如果页面已经加载完成
    if (document.readyState === 'complete') {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    }

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // 移动端菜单
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // 点击链接关闭菜单
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // 导航栏高度
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动动画观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 为计数器添加动画
                if (entry.target.querySelector('.stat-number')) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    // 为需要动画的元素添加观察
    document.querySelectorAll('.feature-card, .benefit-card, .package-card, .testimonial-card, .spec-card, .color-option, .lifestyle-card, .story-card, .highlight-item, .hero-stats .stat').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // 计数器动画
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        if (!target) return;

        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    }

    // 颜色选择器
    const colorOptions = document.querySelectorAll('.color-option');
    const colorDisplay = document.getElementById('colorDisplay');

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除所有active类
            colorOptions.forEach(opt => opt.classList.remove('active'));
            // 添加active类到当前选项
            this.classList.add('active');

            // 更新颜色显示
            const color = this.getAttribute('data-color');
            const gradient = this.getAttribute('data-gradient');
            const desc = this.getAttribute('data-desc');

            const colorPreview = colorDisplay.querySelector('.color-preview');
            const colorName = colorDisplay.querySelector('.color-name');
            const colorDesc = colorDisplay.querySelector('.color-desc');

            colorPreview.style.background = gradient;
            colorName.textContent = color;
            colorDesc.textContent = desc;

            // 添加动画效果
            colorPreview.style.transform = 'scale(0.9)';
            setTimeout(() => {
                colorPreview.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // FAQ展开/收起
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // 关闭其他项
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // 切换当前项
            item.classList.toggle('active');
        });
    });

    // 套餐按钮点击效果
    document.querySelectorAll('.btn-package').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.package-card');
            const packageName = card.querySelector('h3').textContent;
            const price = card.querySelector('.amount').textContent;

            // 创建成功提示
            showNotification(`已选择 ${packageName} ¥${price}，正在跳转...`);

            // 按钮动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // 通知提示函数
    function showNotification(message) {
        // 移除现有通知
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: linear-gradient(135deg, #1d1d1f, #3a3a3a);
            color: white;
            padding: 16px 32px;
            border-radius: 100px;
            font-size: 15px;
            font-weight: 500;
            z-index: 9999;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 12px;
        `;
        notification.innerHTML = `
            <span style="color: #4ade80;">✓</span>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        // 显示动画
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(-50%) translateY(0)';
        }, 10);

        // 移除动画
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }

    // 返回顶部按钮
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 滚动进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // 鼠标跟随效果
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const moveX = (clientX - innerWidth / 2) / 50;
            const moveY = (clientY - innerHeight / 2) / 50;

            const floatingItems = document.querySelectorAll('.float-item');
            floatingItems.forEach((item, index) => {
                const factor = (index + 1) * 0.5;
                item.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
            });
        });
    }

    // 卡片3D倾斜效果
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // 打字效果
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // 为hero标题添加打字效果
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalHTML = heroTitle.innerHTML;
        const text1 = '自由瑜伽';
        const text2 = '从脚下开始';

        heroTitle.innerHTML = '';
        const line1 = document.createElement('span');
        line1.className = 'hero-line';
        const line2 = document.createElement('span');
        line2.className = 'hero-line gradient-text';

        heroTitle.appendChild(line1);
        heroTitle.appendChild(line2);

        // 延迟开始打字效果
        setTimeout(() => {
            typeWriter(line1, text1, 100);
            setTimeout(() => {
                typeWriter(line2, text2, 100);
            }, text1.length * 100 + 200);
        }, 1800); // 等待预加载动画完成
    }

    // 图片懒加载（模拟）
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // 页面可见性变化时暂停/恢复动画
    document.addEventListener('visibilitychange', () => {
        const circles = document.querySelectorAll('.circle, .cta-circle');
        if (document.hidden) {
            circles.forEach(circle => circle.style.animationPlayState = 'paused');
        } else {
            circles.forEach(circle => circle.style.animationPlayState = 'running');
        }
    });

    // 添加页面加载完成的类
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000);
});

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .notification {
        pointer-events: auto;
    }

    .notification:hover {
        transform: translateX(-50%) translateY(-2px);
    }

    body.loaded .hero-sock-showcase .sock-item {
        animation: floatSock 4s ease-in-out infinite;
    }

    .sock-1 { animation-delay: 0s; }
    .sock-2 { animation-delay: 0.5s; }
    .sock-3 { animation-delay: 1s; }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .feature-card:hover .feature-icon-wrapper {
        animation: pulse 0.6s ease;
    }

    .package-card:hover .price {
        animation: pulse 0.6s ease;
    }
`;
document.head.appendChild(style);
