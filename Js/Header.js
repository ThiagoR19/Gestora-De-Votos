function funcionalidadHeader() {
  document.addEventListener('DOMContentLoaded', () => {
    const closeMenu = document.querySelector('.close-menu')
    const openMenu = document.getElementById('menu')

    closeMenu.addEventListener('click', () => toggleMenu())
    openMenu.addEventListener('click', () => toggleMenu())

    function toggleMenu() {
      const mobileMenu = document.querySelector('.mobile-menu')
      mobileMenu.classList.toggle('active')
    }
  })
}

// funcionalidadHeader();
