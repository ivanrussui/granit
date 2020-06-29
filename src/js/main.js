var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.menu-block');
menuButton.addEventListener('click', function () {
	menu.classList.toggle('menu-block-active');
})