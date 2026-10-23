// Medo El Jan - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Simple tab switching for code editor
  const tabs = document.querySelectorAll('.code-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Run button simulation
  const runBtns = document.querySelectorAll('.btn-run');
  runBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const output = this.closest('.code-editor')?.querySelector('.code-output');
      if (output) {
        output.style.color = '#7ee787';
        output.innerHTML = 'جاري التشغيل...\n> تم التنفيذ بنجاح ✓';
        setTimeout(() => {
          output.innerHTML = 'النتيجة\nمرحباً بك في منصة Medo El Jan\nتم تشغيل الكود بنجاح!';
        }, 600);
      }
    });
  });

  // Active nav highlighting based on page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    }
  });
});
