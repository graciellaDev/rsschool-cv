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
                         let link_name=target.getAttribute('linka');
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