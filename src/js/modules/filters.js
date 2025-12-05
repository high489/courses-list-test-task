import { subscribe, setCategory, getState } from './store'
import { html } from '../utils/html'

const containerSelector = '.courses__filters'

export function initFilters() {
  const container = document.querySelector(containerSelector)
  if (!container) return

  function renderButtons() {
    const { categories, currentCategory, courses } = getState()
    const total = courses.length

    let markup = html`
      <button 
        class='courses__filter-btn'
        data-category='all'
        data-active='${currentCategory === 'all'}'
        style='--active-color: var(--primary)'>
        <span>All</span><sup>${total}</sup>
      </button>
    `

    categories.forEach(cat => {
      const isActive = currentCategory === cat.id
      const count = courses.filter(c => c.category.id === cat.id).length

      markup += html`
        <button 
          class='courses__filter-btn'
          data-category='${cat.id}'
          data-active='${isActive}'
          style='--active-color: ${cat.color}'>
          <span>${cat.title}</span><sup>${count}</sup>
        </button>
      `
    })

    container.innerHTML = markup

    container.querySelectorAll('.courses__filter-btn').forEach(btn => {
      btn.addEventListener('click', onFilterClick)
    })

    requestAnimationFrame(() => {
      container.querySelectorAll('.courses__filter-btn').forEach(btn => {
        if (btn.dataset.active === 'true') {
          btn.classList.add('active')
        }
      })
    })
  }

  function onFilterClick(e) {
    const btn = e.currentTarget
    const key = btn.dataset.category
    setCategory(key)
  }

  const unsubscribe = subscribe(() => {
    renderButtons()
  })

  renderButtons()

  return () => unsubscribe()
}
