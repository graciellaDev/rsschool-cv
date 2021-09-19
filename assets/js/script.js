function coord(elem) {
    //var elem = document.getElementById('about_me');
    var distanceScrolled = document.body.scrollTop,
        elemRect = elem.getBoundingClientRect(),
        elemViewportOffset = elemRect.top,
        totalOffset = distanceScrolled + elemViewportOffset;
        return elemViewportOffset;
  }
  var nav_link=document.querySelector('nav');
  nav_link.addEventListener('click',function(event){
                       let target=event.target,
                           menu=document.getElementById('menu_mob'),
                           burger=document.querySelector('#burger i');
                       if (target.tagName=='A'){
                         let link_name=target.getAttribute('title');
                         let link=document.getElementById(link_name);
                         link.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                         menu.style.display='none';
                         burger.classList.remove('fa-times');
                         burger.classList.add('fa-bars');
                         }
                       }
  )
  var burger=document.getElementById('burger');
  burger.onclick=function(){
     console.log('Click');
    let menu=document.getElementById('menu_mob'),
        computedStyle = getComputedStyle(menu);
    if(computedStyle.display=='none'){
      menu.style.display='block';
      this.querySelector('i').classList.remove('fa-bars');
      this.querySelector('i').classList.add('fa-times');
    }
    else{
      menu.style.display='none';
      this.querySelector('i').classList.remove('fa-times');
      this.querySelector('i').classList.add('fa-bars');
    }
  }
  deploy+='Done 18.09.2021 / deadline 20.09.2021 \n ';
  deploy+='Score: 167 / 200 \n Наличие выполненных критериев: \n ';
  deploy+='вёрстка семантическая +20 \n ';
  deploy+='В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. Заголовок h1 может быть только один. \n ';
  deploy+='2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов +20 \n ';
  deploy+='2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов +20 \n ';
  deploy+='для оформления СV используются css-стили +10 \n ';
  deploy+='1 балл за каждый стилизованный элемент, но не больше 10 баллов \n ';
  deploy+='контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 \n ';
  deploy+='контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 \n ';
  deploy+='вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10 \n ';
  deploy+='есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10 \n ';
  deploy+='на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10 \n ';
  deploy+='контакты для связи и перечень навыков оформлены в виде списка ul > li +10 \n ';
  deploy+='CV содержит пример вашего кода (например, решение задачи с сайта codewars) +2 \n ';
  deploy+='CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 \n ';
  deploy+='CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10 \n ';
  deploy+='CV выполнено на английском языке +10 \n ';
  deploy+='выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 \n ';
  deploy+='есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд) +10 \n ';
  deploy+='есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд) +10 \n ';
  console.log(deploy);