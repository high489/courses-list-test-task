import { html } from '../utils/html'
import { categories } from '../../mock_data/categories'

function getColorForCategory(catId) {
  const found = categories.find(c => c.id === catId)
  return found ? found.color : '#424551'
}

export const createCard = (course) => {
  const categoryKey = course.category.id
  const bgColor = getColorForCategory(categoryKey)

  return html`
    <article class='course-card' data-id='${course.id}' data-category='${categoryKey}'>
      <div class='course-card__image'>
        <img
          src='${course.teacher_image}'
          alt='${course.teacher_name}'
          class='course-card__teacher-img'
        />
      </div>
      <div class='course-card__content'>
        <span class='course-card__category' style="background-color: ${bgColor}">
          ${course.category.title}
        </span>
        <h3 class='course-card__title'>${course.title}</h3>
        <div class='course-card__info'>
          <span class='course-card__price'>${course.price}</span>
          <span class='course-card__divider'></span>
          <span class='course-card__teacher'>by ${course.teacher_name}</span>
        </div>
      </div>
    </article>
  `
}