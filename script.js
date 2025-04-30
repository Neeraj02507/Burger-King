//SideBar..
const sidebar = document.getElementById('sidebar');
const king = document.getElementById('king');
const content = document.getElementById('content-wrapper');

document.addEventListener('click', (e) => {
  const clickedInside = sidebar.contains(e.target) || king.contains(e.target);

  if (clickedInside) {
    // Toggle only when king itself is clicked
    if (king.contains(e.target)) {
      sidebar.classList.toggle('active');
      king.classList.toggle('active');
      content.classList.toggle('blur');
    }
  } else {
    // Click outside: close sidebar
    sidebar.classList.remove('active');
    king.classList.remove('active');
    content.classList.remove('blur');
  }
});