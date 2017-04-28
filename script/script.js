(function(){
  $('body').css({
    "minHeight": window.innerHeight
  });
  $.ajax({
    url: 'data.json'
  }).done(
    function(data){
      const navData = data.navigation;
      const contData = data.contact;
      navData.forEach( (everyNav, index1) => {$('nav').append(
                                                    `<div>
                                                       <img src="${data.navImg[index1]}">
                                                       <h2>${everyNav}</h2>
                                                     </div>`)
      });
      contData.forEach( (everyCont, index2) => {$('.contacts').append(
                                                    `<div>
                                                       <img src="${data.contImg[index2]}">
                                                       <h2>${everyCont}</h2>
                                                     </div>`)
      });
    }
  );
  $(document).ready(function (){
    const allNav = $('nav > div').get();
    const navBtn = $('nav > div');

    $.getJSON('data.json', data => {
      const showFunction = [profileFunc, projectFunc, skillsFunc];
      const content = data.mainImg;
      const mainC = $('.mainContent');

      // Navigation onClick events
      allNav.forEach( (oneNav, index) => $(oneNav).on('click', showFunction[index]));

      profileFunc();
      function profileFunc() {
        mainC.empty();
        navBtn.removeClass('hovered');
        $(this).addClass('hovered');
        mainC.append(`<img src="${content[0]}">`);
      }
      function projectFunc() {
        mainC.empty();
        navBtn.removeClass('hovered');
        $(this).addClass('hovered');
        content.forEach(oneImg => {
          mainC.append(`<img class="allImg" src="${oneImg}">`);
        });
      }

      function skillsFunc(){
        mainC.empty();
        navBtn.removeClass('hovered');
        $(this).addClass('hovered');
        for(let i = 0; i < (content.length - 1); i++){
          mainC.append(`<img class="allImg" src="${content[i]}">`);
          $('.allImg').addClass('halfImg');
        }
      }

        // ARROWS onClick events
      let rotate = 0;
      $('section > p:first-of-type').on('click', function(){
        if (rotate <= 0){
          rotate = showFunction.length -1;
        } else {
          rotate --;
        }
        allNav[rotate].click();
          //native JS
        // showFunction[rotate]();
        // allNav[rotate].classList.add('hovered')
      });
      $('section > p:last-of-type').on('click', function(){
        if (rotate >= showFunction.length-1){
          rotate = 0;
        } else {
          rotate ++;
        }
        allNav[rotate].click();
          //native JS
        // showFunction[rotate]();
        // allNav[rotate].classList.add('hovered');
      });
    });
  });
})();
