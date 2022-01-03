// ELEMENTS BY CLASS

const sidebarToggle = document.querySelector('.sidebar-toggle');
const barsIcon = document.querySelector('.fa-bars');
const sidebarContainer = document.querySelector('.sidebar-container');
const closeSidebarBtn = document.querySelector('.close-sidebarbtn');

// EVENT LISTENERS

sidebarToggle.addEventListener('click', function () {
  barsIcon.classList.toggle('fa-bars-active');
  sidebarContainer.classList.toggle('sidebar-container-active');
});

closeSidebarBtn.addEventListener('click', function () {
  sidebarContainer.classList.remove('sidebar-container-active');
  barsIcon.classList.remove('fa-bars-active');
});
