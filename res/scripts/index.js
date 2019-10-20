document.getElementById('btn-theme').addEventListener('click', () => {
  const banner = document.getElementById('banner')
  if (banner.classList.contains('light')) {
    banner.classList.remove('light')
    banner.classList.add('dark')
  } else {
    banner.classList.remove('dark')
    banner.classList.add('light')
  }

  const nav = document.getElementById('nav')
  if (nav.classList.contains('light')) {
    nav.classList.remove('light')
    nav.classList.add('dark')
  } else {
    nav.classList.remove('dark')
    nav.classList.add('light')
  }

  const navItems = document.getElementsByClassName('nav-item')
  console.log(navItems.length)
  for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].classList.contains('light')) {
      navItems[i].classList.remove('light')
      navItems[i].classList.add('dark')
    } else {
      navItems[i].classList.remove('dark')
      navItems[i].classList.add('light')
    }
  }
})