const listItem = document.querySelectorAll('.nav__list--item');

function activeLink() {
  listItem.forEach(item => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}

listItem.forEach(item => {
  item.addEventListener('click', activeLink);
});
