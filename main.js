const dropdown = document.querySelector('.dropdown')
const dropdownTrigger = document.querySelector('.dropdown-trigger')

// Kliknutie na trigger iba prepína triedu
dropdownTrigger.addEventListener('click', function () {
  dropdown.classList.toggle('is-active')
})

// Globálny listener, ktrorý kontroluje, kde sa kliklo
window.addEventListener('click', function (event) {
  // Ak kliknutie NEBOLO na trigger a zároveň NEBOLO vo vnútri dropdownu
  if (
    !dropdownTrigger.contains(event.target) &&
    !dropdown.contains(event.target)
  ) {
    dropdown.classList.remove('is-active')
  }
})
