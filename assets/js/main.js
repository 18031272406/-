document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  const subscribe = document.querySelector('.subscribe');
  if (subscribe) {
    subscribe.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = subscribe.querySelector('input[type="email"]');
      if (!input) return;
      const email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('请输入有效邮箱');
        return;
      }
      alert('订阅成功：' + email);
      input.value = '';
    });
  }
});



