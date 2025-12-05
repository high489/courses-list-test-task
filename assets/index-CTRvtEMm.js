(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const l=(e,...t)=>String.raw({raw:e},...t),m=[{id:"marketing",title:"Marketing",color:"#03CEA4"},{id:"management",title:"Management",color:"#5A87FC"},{id:"hr",title:"HR & Recruting",color:"#F89828"},{id:"design",title:"Design",color:"#F52F6E"},{id:"development",title:"Development",color:"#7772F1"}];function $(e){const t=m.find(r=>r.id===e);return t?t.color:"#424551"}const M=e=>{const t=e.category.id,r=$(t);return l`
    <article class='course-card' data-id='${e.id}' data-category='${t}'>
      <div class='course-card__image'>
        <img
          src='${e.teacher_image}'
          alt='${e.teacher_name}'
          class='course-card__teacher-img'
        />
      </div>
      <div class='course-card__content'>
        <span class='course-card__category' style="background-color: ${r}">
          ${e.category.title}
        </span>
        <h3 class='course-card__title'>${e.title}</h3>
        <div class='course-card__info'>
          <span class='course-card__price'>${e.price}</span>
          <span class='course-card__divider'></span>
          <span class='course-card__teacher'>by ${e.teacher_name}</span>
        </div>
      </div>
    </article>
  `},S=[{id:0,title:"The Ultimate Google Ads Training Course",category:{id:"marketing",title:"Marketing"},price:"$100",teacher_name:"Jerome Bell",teacher_image:"assets/images/teachers/jerome-bell.png"},{id:1,title:"Product Management Fundamentals",category:{id:"management",title:"Management"},price:"$480",teacher_name:"Marvin McKinney",teacher_image:"assets/images/teachers/marvin-mckinney.png"},{id:2,title:"HR Management and Analytics",category:{id:"hr",title:"HR & Recruiting"},price:"$200",teacher_name:"Leslie Alexander Li",teacher_image:"assets/images/teachers/leslie-alexander-li.png"},{id:3,title:"Brand Management & PR Communications",category:{id:"marketing",title:"Marketing"},price:"$530",teacher_name:"Kristin Watson",teacher_image:"assets/images/teachers/kristin-watson.png"},{id:4,title:"Graphic Design Basic",category:{id:"design",title:"Design"},price:"$500",teacher_name:"Guy Hawkins",teacher_image:"assets/images/teachers/guy-hawkins.png"},{id:5,title:"Business Development Management",category:{id:"management",title:"Management"},price:"$400",teacher_name:"Dianne Russell",teacher_image:"assets/images/teachers/dianne-russell.png"},{id:6,title:"Highload Software Architecture",category:{id:"development",title:"Development"},price:"$600",teacher_name:"Brooklyn Simmons",teacher_image:"assets/images/teachers/brooklyn-simmons.png"},{id:7,title:"Human Resources – Selection and Recruitment",category:{id:"hr",title:"HR & Recruiting"},price:"$150",teacher_name:"Kathryn Murphy",teacher_image:"assets/images/teachers/kathryn-murphy.png"},{id:8,title:"User Experience. Human-centered Design",category:{id:"design",title:"Design"},price:"$240",teacher_name:"Cody Fisher",teacher_image:"assets/images/teachers/cody-fisher.png"}],c={courses:S.slice(),categories:m,currentCategory:"all",searchQuery:""},u=new Set;function h(e){return u.add(e),()=>u.delete(e)}function p(){const e=y();u.forEach(t=>t(e,c))}function L(e){c.currentCategory=e||"all",p()}function d(e){c.searchQuery=String(e||"").trim(),p()}function w(){return{...c}}function y(){const e=c.searchQuery.toLowerCase();return c.courses.filter(t=>c.currentCategory!=="all"&&t.category.id!==c.currentCategory?!1:e&&e.length>=3?t.title.toLowerCase().includes(e):!0)}const k=".courses__filters";function H(){const e=document.querySelector(k);if(!e)return;function t(){const{categories:s,currentCategory:i,courses:n}=w(),f=n.length;let g=l`
      <button 
        class='courses__filter-btn'
        data-category='all'
        data-active='${i==="all"}'
        style='--active-color: var(--primary)'>
        <span>All</span><sup>${f}</sup>
      </button>
    `;s.forEach(a=>{const v=i===a.id,C=n.filter(b=>b.category.id===a.id).length;g+=l`
        <button 
          class='courses__filter-btn'
          data-category='${a.id}'
          data-active='${v}'
          style='--active-color: ${a.color}'>
          <span>${a.title}</span><sup>${C}</sup>
        </button>
      `}),e.innerHTML=g,e.querySelectorAll(".courses__filter-btn").forEach(a=>{a.addEventListener("click",r)}),requestAnimationFrame(()=>{e.querySelectorAll(".courses__filter-btn").forEach(a=>{a.dataset.active==="true"&&a.classList.add("active")})})}function r(s){const n=s.currentTarget.dataset.category;L(n)}const o=h(()=>{t()});return t(),()=>o()}function E(e,t=200){let r;return(...o)=>{clearTimeout(r),r=setTimeout(()=>e(...o),t)}}function F(){const e=document.querySelector(".courses__search");if(!e)return;const t=E(r=>{!r||r.trim().length<3?d(""):d(r.trim())},220);e.addEventListener("input",r=>{t(r.target.value)}),e.addEventListener("keydown",r=>{r.key==="Escape"&&(e.value="",d(""))})}document.querySelector("#app").innerHTML=l`
  <div class='page'>
    <div class='background'>
      <section class='greeting'>
        <h6 class='greeting__subtitle'>ENJOY YOUR STUDYING!</h6>
        <h1 class='greeting__title'>Our online courses</h1>
      </section>
    </div>

    <main class='container'>
      <section class='courses'>
        <div class='courses__controls'>
          <div class='courses__filters'></div>

          <input
            type='text'
            class='courses__search'
            placeholder='Search course...'
          />
        </div>

        <div class='courses__list'></div>

        <div class='courses__load'>
          <div class='courses__load-icon'>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C1.55228 0 2 0.447715 2 1V5.43632C3.65803 2.20928 7.01998 0 10.9 0C15.2556 0 18.9584 2.78413 20.3307 6.66675C20.5147 7.18747 20.2418 7.75879 19.7211 7.94284C19.2004 8.12689 18.6291 7.85396 18.445 7.33325C17.3463 4.22472 14.3817 2 10.9 2C7.93996 2 5.35365 3.60799 3.96994 6H6.99996C7.55225 6 7.99996 6.44772 7.99996 7C7.99996 7.55228 7.55225 8 6.99996 8H1C0.447715 8 0 7.55228 0 7V1C0 0.447715 0.447715 0 1 0Z" fill="#424551"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.07703 12.0572C2.59775 11.8731 3.16907 12.146 3.35312 12.6668C4.45183 15.7753 7.41647 18 10.8982 18C13.8582 18 16.4445 16.392 17.8282 14H14.7982C14.2459 14 13.7982 13.5523 13.7982 13C13.7982 12.4477 14.2459 12 14.7982 12H20.7981C21.3504 12 21.7981 12.4477 21.7981 13V19C21.7981 19.5523 21.3504 20 20.7981 20C20.2459 20 19.7981 19.5523 19.7981 19V14.5637C18.1401 17.7907 14.7782 20 10.8982 20C6.54254 20 2.83975 17.2159 1.46744 13.3332C1.28339 12.8125 1.55632 12.2412 2.07703 12.0572Z" fill="#424551"/>
            </svg>
          </div>
          <span class='courses__load-text'>Load more</span>
        </div>
      </section>
    </main>
  </div>
`;function _(e){const t=document.querySelector(".courses__list");t.innerHTML=e.map(M).join("")}h(e=>{_(e)});H();F();_(y());
