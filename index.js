const themeToggle = document.getElementById('btn-theme')
themeToggle.addEventListener('click', function (e) {
  const navbar = document.getElementById('navbar')
  const body = document.getElementById('body')
  if (navbar.classList.contains('is-light')){
    navbar.classList.remove('is-light')
    navbar.classList.add('is-dark')
    body.classList.remove('is-light')
    body.classList.add('is-dark')
  } else {
    navbar.classList.remove('is-dark')
    navbar.classList.add('is-light')
    body.classList.remove('is-dark')
    body.classList.add('is-light')
  }
})