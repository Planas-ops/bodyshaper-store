// 商品数据
const products = {
    'product-1.jpg': {
        title: 'Lace Edition',
        titleCn: '蕾丝花边款',
        badge: 'HOT',
        colors: '10+ Colors',
        description: `
            <p><strong>English:</strong> Elegant lace design that combines sexy and comfortable perfectly. The intricate lace detailing adds a touch of femininity while the seamless construction ensures all-day comfort. Perfect for daily wear and special occasions.</p>
            <p><strong>中文：</strong>精致蕾丝设计，将性感与舒适完美结合。精致的蕾丝细节增添女性魅力，无缝工艺确保全天舒适。适合日常穿着和特殊场合。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423']
    },
    'product-2.jpg': {
        title: 'Classic Shaper',
        titleCn: '基础收腹款',
        badge: '',
        colors: '10+ Colors',
        description: `
            <p><strong>English:</strong> Classic high-waist design with powerful tummy control. The 360° compression panel smooths your waistline instantly, creating a sleek silhouette under any outfit. Invisible under clothing for a flawless look.</p>
            <p><strong>中文：</strong>经典高腰设计，强力收腹效果。360°压缩面板瞬间平滑腰线，在任何服装下都呈现完美轮廓。穿在衣服下完全隐形，打造无瑕造型。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423']
    },
    'product-3.jpg': {
        title: 'High-Waist Lift',
        titleCn: '高腰提臀款',
        badge: 'NEW',
        colors: '12+ Colors',
        description: `
            <p><strong>English:</strong> Extra high waistband with innovative butt-lifting technology. The 3D cut design naturally lifts and shapes your curves, creating a perfect S-curve silhouette. Feel confident and beautiful in every outfit.</p>
            <p><strong>中文：</strong>加高腰头设计，采用创新提臀技术。3D剪裁设计自然提升和塑造曲线，打造完美S型曲线。让每一套服装都展现自信与美丽。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423', '#9370DB', '#FFB6C1']
    },
    'product-4.jpg': {
        title: 'Scallop Edge',
        titleCn: '波浪花边款',
        badge: '',
        colors: '8+ Colors',
        description: `
            <p><strong>English:</strong> Unique scallop edge design that adds a trendy, youthful touch. The wave-like hemline is not only fashionable but also prevents digging into skin. Comfortable fit that flatters your figure.</p>
            <p><strong>中文：</strong>独特的波浪花边设计，增添时尚减龄感。波浪形下摆不仅时尚，还不会勒腿。舒适贴合，展现完美身材。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423']
    },
    'product-5.jpg': {
        title: 'Plus Comfort',
        titleCn: '超大码舒适款',
        badge: '',
        colors: '6+ Colors',
        description: `
            <p><strong>English:</strong> Specially designed for plus-size bodies with extra stretch fabric. The wider waistband and leg openings provide maximum comfort without tightness. Feel free and confident all day long.</p>
            <p><strong>中文：</strong>专为大码身材设计，采用超弹力面料。更宽的腰头和裤腿设计提供最大舒适度，不会紧绷。全天自由自信。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8']
    },
    'product-6.jpg': {
        title: 'Ribbed Lace',
        titleCn: '条纹花边款',
        badge: 'BEST SELLER',
        colors: '15+ Colors',
        description: `
            <p><strong>English:</strong> Vertical ribbed fabric with delicate lace trim. The ribbed texture creates a slimming visual effect while the lace adds elegance. Available in 15+ stunning colors to match any outfit.</p>
            <p><strong>中文：</strong>竖条纹面料搭配精致蕾丝花边。条纹纹理营造视觉显瘦效果，蕾丝增添优雅感。15+种时尚颜色可选，搭配任何服装。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423', '#9370DB', '#FFB6C1', '#20B2AA']
    },
    'product-7.jpg': {
        title: 'Solid Basic',
        titleCn: '纯色基础款',
        badge: '',
        colors: '10+ Colors',
        description: `
            <p><strong>English:</strong> Simple yet elegant solid color design. Versatile for everyday wear with skin-friendly, breathable fabric. The minimalist style pairs perfectly with any wardrobe staple.</p>
            <p><strong>中文：</strong>简约优雅的纯色设计。百搭日常穿着，亲肤透气面料。极简风格与任何衣橱单品完美搭配。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423', '#9370DB']
    },
    'product-8.jpg': {
        title: 'Cotton Breathable',
        titleCn: '棉质透气款',
        badge: '',
        colors: '8+ Colors',
        description: `
            <p><strong>English:</strong> Features a cotton crotch panel for ultimate breathability and hygiene. The moisture-wicking fabric keeps you dry and comfortable. Perfect for all-season wear, especially for active lifestyles.</p>
            <p><strong>中文：</strong>纯棉内档设计，极致透气卫生。吸湿排汗面料保持干爽舒适。适合四季穿着，特别适合活跃生活方式。</p>
        `,
        colorList: ['#2C2C2E', '#8B4513', '#C4A77D', '#B8C5D6', '#D4C5C2', '#C5D4C8', '#E8D5C4', '#6B4423']
    }
};

// 从URL获取商品图片
const urlParams = new URLSearchParams(window.location.search);
const productImg = urlParams.get('img');

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 移动端视口修复
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
    }

    // 防止双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    if (productImg && products[productImg]) {
        const product = products[productImg];

        // 设置主图
        document.getElementById('mainImage').src = productImg;

        // 设置标题
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productTitleCn').textContent = product.titleCn;

        // 设置徽章
        const badge = document.getElementById('productBadge');
        if (product.badge) {
            badge.textContent = product.badge;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }

        // 设置描述
        document.getElementById('productDescription').innerHTML = product.description;

        // 设置颜色数量
        document.getElementById('colorCount').textContent = product.colors;

        // 生成颜色选项
        const colorOptions = document.getElementById('colorOptions');
        product.colorList.forEach((color, index) => {
            const colorBtn = document.createElement('button');
            colorBtn.className = `color-btn ${index === 0 ? 'active' : ''}`;
            colorBtn.style.background = color;
            colorBtn.onclick = () => {
                document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
                colorBtn.classList.add('active');
            };
            colorOptions.appendChild(colorBtn);
        });

        // 生成相关产品
        generateRelatedProducts(productImg);
    } else {
        // 如果没有参数，显示默认商品
        window.location.href = 'index.html';
    }
});

// 生成相关产品
function generateRelatedProducts(currentImg) {
    const relatedGrid = document.getElementById('relatedGrid');
    const allImages = Object.keys(products).filter(img => img !== currentImg);

    // 随机选择4个相关产品
    const shuffled = allImages.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    selected.forEach(img => {
        const product = products[img];
        const card = document.createElement('div');
        card.className = 'related-card';
        card.innerHTML = `
            <img src="${img}" alt="${product.title}">
            <div class="related-info">
                <h4>${product.title}</h4>
                <p>${product.titleCn}</p>
            </div>
        `;
        card.onclick = () => {
            window.location.href = `product.html?img=${encodeURIComponent(img)}`;
        };
        relatedGrid.appendChild(card);
    });
}
