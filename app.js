const items = document.querySelectorAll('.item');
const toggleBtn = document.querySelector('.toggle');
const profileBtn = document.getElementById('profile-icon');
const profileDropdown = document.querySelector('.dropdown');
const toggleModeButton = document.getElementById('toggle-mode-button');

let isHidden = false;

toggleBtn.addEventListener('click', () => {

  isHidden = !isHidden

  items.forEach(item => {
    item.style.display = isHidden ? 'none' : 'block';
  })

  toggleBtn.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(90deg)';
  
  
})




