import { setSearch } from './store'

function debounce(fn, delay = 200) {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), delay)
  }
}

export function initSearch() {
  const input = document.querySelector('.courses__search')
  if (!input) return

  const handler = debounce((value) => {
    if (!value || value.trim().length < 3) {
      setSearch('')
    } else {
      setSearch(value.trim())
    }
  }, 220)

  input.addEventListener('input', (e) => {
    handler(e.target.value)
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = ''
      setSearch('')
    }
  })
}