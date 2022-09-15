window.addEventListener('DOMContentLoaded', function () {

   // BURGER
   const body = document.querySelector('body')
   const burger = document.querySelector('.burger')
   const burgerIcon = document.querySelector('.burger__icon')

   const toggleBurger = () => burger.classList.toggle('burger_active')

   burgerIcon.addEventListener('click', () => {
      toggleBurger()
      toggleStyle(body, 'marginRight', window.innerWidth - document.documentElement.clientWidth + 'px')
      toggleStyle(body, 'overflow', 'hidden')
      // click to empty place right burger
      window.addEventListener('click', e => {
         if (!e.target.closest('.burger')) {
            burger.classList.remove('burger_active')
            body.style.overflowY = 'auto'
            body.style.marginRight = '0'
         }
      })

      // in linksScroll toggleBurger() and toggleStyle(body, 'overflow', 'hidden')
   })

   function toggleStyle(el, styleName, value) {
      if (el.style[styleName] !== value) {
         el.style[styleName] = value;
      } else {
         el.style[styleName] = 'auto';
      }
   }


   // SEARCH POPUP 
   const dropSearchBtn = document.querySelector('#searchBtn')
   const searchBox = document.querySelector('.search-box')
   const searchBtnMain = document.querySelector('.search__btn_main')
   const searchBtnClose = document.querySelector('.search__btn_close')

   dropSearchBtn.addEventListener('click', () => {
      searchBox.classList.add('search-box_open')
   })

   searchBtnClose.addEventListener('click', () => {
      searchBox.classList.remove('search-box_open')
   })


   // LINKSSCROLL
   const menuLinks = document.querySelectorAll('.nav__link[data-goto]')
   if (menuLinks.length > 0) {
      menuLinks.forEach(link => {
         link.addEventListener('click', menuLinkClick)
      })

      function menuLinkClick(el) {
         const linkTo = el.target
         const goToBlock = document.querySelector(linkTo.dataset.goto)

         if (goToBlock) {
            goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset

            window.scrollTo({
               top: goToBlockValue,
               behavior: "smooth",
            })
            el.preventDefault()
         }

         if (burger.classList.contains('burger_active')) {
            toggleBurger()
            toggleStyle(body, 'overflow', 'hidden')
            toggleStyle(body, 'marginRight', window.innerWidth - document.documentElement.clientWidth + 'px')
         }
      }
   }


   // SWIPER
   var swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      loop: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });


   // TABS
   const tabsSteps = [...document.querySelectorAll('.work__step')]
   const tabs = document.querySelectorAll('.tab')

   tabsSteps[0].classList.add('work__step_active')
   tabs[0].classList.add('tab_active')

   tabsSteps.forEach(function (step) {

      step.addEventListener('click', function () {

         tabsSteps.forEach((step) => { step.classList.remove('work__step_active') })
         step.classList.add('work__step_active')

         tabs.forEach((tab) => { tab.classList.remove('tab_active') })
         tabs[tabsSteps.indexOf(step)].classList.add('tab_active')

      })
   })

   tabTexts = this.document.querySelectorAll('.tab__text')

   if (this.window.innerWidth <= 920) {
      tabTexts[0].textContent = 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями.А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, современные исследования подвергнуты целой серии независимых исследований.'

      tabTexts[2].textContent = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия.'
   }


   // ACCORDION
   const labelBoxes = [...document.querySelectorAll('.faq-item__label-box')]
   const faqItemsTexts = [...document.querySelectorAll('.faq-item__text')]

   let lastSvg = null

   labelBoxes.forEach((labelBox) => {
      labelBox.addEventListener('click', function () {

         const itemText = labelBox.nextElementSibling

         if (itemText.style.maxHeight) {
            faqItemsTexts.forEach((el) => { el.style.maxHeight = null })
         } else {
            faqItemsTexts.forEach((el) => { el.style.maxHeight = null })
            itemText.style.maxHeight = itemText.scrollHeight + 'px'

            if (lastSvg !== null) {
               lastSvg.classList.remove('faq__svg_active')
            }
         }

         lastSvg = labelBox.querySelector('svg')
         lastSvg.classList.toggle('faq__svg_active')

      })
   })

})