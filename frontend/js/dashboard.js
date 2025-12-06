const userNameEl = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

function checkAuth() {
  const userName = localStorage.getItem('userName');
  if (!userName) {
    window.location.href = 'login.html';
    return;
  }
  userNameEl.textContent = userName;
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('userName');
  window.location.href = 'login.html';
});

checkAuth();
