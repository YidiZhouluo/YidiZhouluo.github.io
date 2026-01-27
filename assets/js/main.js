// 倒计时计算函数
function updateCountdown() {
    const now = new Date();

    // 英语四级考试日期 (假设是2025年12月21日)
    const cet4Date = new Date('2025-12-21');
    const cet4Diff = Math.ceil((cet4Date - now) / (1000 * 60 * 60 * 24));

    // 2028考研日期 (2027年12月第一个周末，假设是2027年12月18日)
    const kaoyanDate = new Date('2027-12-18');
    const kaoyanDiff = Math.ceil((kaoyanDate - now) / (1000 * 60 * 60 * 24));

    // 更新显示
    const cet4Element = document.getElementById('cet4-countdown');
    const kaoyanElement = document.getElementById('kaoyan-countdown');

    if (cet4Element) {
        if (cet4Diff > 0) {
            cet4Element.textContent = `还有 ${cet4Diff} 天`;
            cet4Element.style.color = cet4Diff <= 30 ? '#f5576c' : '#667eea';
        } else {
            cet4Element.textContent = '已结束';
            cet4Element.style.color = '#999';
        }
    }

    if (kaoyanElement) {
        if (kaoyanDiff > 0) {
            const years = Math.floor(kaoyanDiff / 365);
            const days = kaoyanDiff % 365;
            kaoyanElement.textContent = `${years}年${days}天`;
            kaoyanElement.style.color = '#667eea';
        } else {
            kaoyanElement.textContent = '已结束';
            kaoyanElement.style.color = '#999';
        }
    }
}

// ============================================
// 主题切换功能
// ============================================

// 获取当前主题
function getTheme() {
    // 优先从 localStorage 获取
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // 否则跟随系统偏好
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// 设置主题
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// 切换主题
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// 初始化主题切换按钮
function initThemeToggle() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
}

// ============================================
// 页面加载时执行
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化主题
    const theme = getTheme();
    setTheme(theme);
    
    // 初始化主题切换按钮
    initThemeToggle();
    
    // 初始化倒计时
    updateCountdown();
    // 每天更新一次
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);
});

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // 只在用户没有手动设置过主题时响应系统变化
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
