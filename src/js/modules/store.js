import { courses } from '../../mock_data/courses'
import { categories } from '../../mock_data/categories'

export function getCategoryColorByKey(key) {
  const item = categories.find(c => c.id === key)
  return item ? item.color : null
}

// LOCAL STATE
const state = {
  courses: courses.slice(),
  categories,
  currentCategory: 'all',
  searchQuery: '',
}


// SUBSCRIBERS
const subs = new Set()

export function subscribe(fn) {
  subs.add(fn)
  return () => subs.delete(fn)
}

function notify() {
  const filtered = getFilteredCourses()
  subs.forEach(fn => fn(filtered, state))
}


// SETTERS
export function setCategory(key) {
  state.currentCategory = key || 'all'
  notify()
}

export function setSearch(query) {
  state.searchQuery = String(query || '').trim()
  notify()
}

// GETTERS
export function getState() {
  return { ...state }
}

export function getFilteredCourses() {
  const q = state.searchQuery.toLowerCase()

  return state.courses.filter(course => {
    if (state.currentCategory !== 'all') {
      const courseKey = course.category.id
      if (courseKey !== state.currentCategory) return false
    }

    if (q && q.length >= 3) {
      return course.title.toLowerCase().includes(q)
    }

    return true
  })
}
