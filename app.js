const items = document.querySelectorAll('.item');
const toggleBtn = document.querySelector('.toggle');

let isHidden = false;

toggleBtn.addEventListener('click', () => {

  isHidden = !isHidden

  items.forEach(item => {
    item.style.display = isHidden ? 'none' : 'block';
  })

  toggleBtn.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(90deg)';
  
  
})