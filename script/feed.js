
    var buttons = document.getElementsByClassName('b-ripple');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}
  


    function comment(){

        
    fixed = $("body")

    fixed.addClass("fixed");

    anim = $("#hide-form")

      anim.addClass("comment-form");

    anim = $("#comment-scroller")

      anim.addClass("comment-scroller");

    anim = $("#hide-form")

      if (anim.hasClass("hide-form")) {
        anim.removeClass("hide-form");
      } else {
        anim.addClass("hide-form");
      }

    anim = $("#comment-scroller")

     
        anim.removeClass("hide-scroller");
    } 
    
    anim = $("#swipe-wrap")

     
        anim.removeClass("hide-scroller");

    function profile() {
    
    anim = $("#anim")

    if (anim.hasClass("anim")) {
      anim.removeClass("anim");
    } else {
      anim.addClass("anim");
    }

    fixed = $("#profile-block-hide")

    if (fixed.hasClass("hide")) {
      fixed.removeClass("hide");
    } else {
      fixed.addClass("hide");
    }

    fixed = $("#profile-block-hide")

    if (fixed.hasClass("profile-block-show")) {
      fixed.removeClass("profile-block-show");
    } else {
      fixed.addClass("profile-block-show");
    }

    fixed = $("#blur")

    if (fixed.hasClass("hide")) {
      fixed.removeClass("hide");
    } else {
      fixed.addClass("hide");
    }
    
    fixed = $("#blur")

    if (fixed.hasClass("blur")) {
      fixed.removeClass("blur");
    } else {
      fixed.addClass("blur");
    }
    
    fixed = $("body")

    if (fixed.hasClass("fixed")) {
      fixed.removeClass("fixed");
    } else {
      fixed.addClass("fixed");
    }
    } 






    menu = $("nav ul");
toggle = $("nav ul .menu");

toggle.on("click", function() {
    if (menu.hasClass("active")) {
        menu.removeClass("active");
    } else {
        menu.addClass("active");
    }
});
  
var swipeEl = document.getElementById('swipe-wrap');
var mcSwipe = new Hammer.Manager(swipeEl);

var SWIPE_PLAYER_HEIGHT = window.innerHeight - 100;
var DISPLAY_SWIPE_THRESHOLD = SWIPE_PLAYER_HEIGHT / 2.5;

var lastPosY = 0;
var isDragging = false;
var canSwipeUpDown = false;
var isOpen = false;

function getTranslate3d(setting = '') {
    var values = setting.split(/\w+\(|\);?/);

    if (!values[1] || !values[1].length) {
        return [];
    }

    return values[1].split(/,\s?/g).map(value => parseInt(value, 10));
}

function setTranslate3dPosY(posY) {
    return 'translate3d(0,' + posY + 'px, 0)';
}

function hideswipeEl(elem) {

    isOpen = false;
    elem.classList.remove("show");
    elem.classList.remove("canScroll");
    elem.style.transform = 'translate3d(0, 0, 0)';
    lastPosY = getTranslate3d(elem.style.transform)[1];
}

function showNow(elem) {
    setTimeout(function () { isOpen = true }, 500);

    elem.classList.remove("hide-scroller");
    elem.classList.add("show");
    var topPos = - window.innerHeight + 450;
    elem.style.transform = 'translate3d(0,' + topPos + 'px, 0)';
    lastPosY = getTranslate3d(elem.style.transform)[1];
}

function displayswipeEl(elem = swipeEl) {
    elem.style.transform = 'translate3d(0, -100, 0)';
    elem.classList.remove("hide-scroller");
}

function handleDrag(ev) {
    var direction = ev.offsetDirection;
    var directionDown = direction === 16;

    swipeEl.addEventListener(
        'scroll',
        function () {
            var scrollTop = swipeEl.scrollTop;
            if (scrollTop == 0) {
                canSwipeUpDown = false;
                isOpen = false;
                swipeEl.classList.remove('canScroll');
            }
            else {
                canSwipeUpDown = true;
                isOpen = true;

                swipeEl.classList.add('canScroll');
            }
        },
        false
    )

    if (isOpen && !directionDown) {
        setTranslate3dPosY(0);
        console.log('is open');
        canSwipeUpDown = true;
        swipeEl.classList.add('canScroll');
    }
    else if (!canSwipeUpDown) {
        swipeEl.classList.remove('canScroll');
        console.log('is open but scroll UP');
        var elem = swipeEl;

        // DRAG STARTED
        if (!isDragging) {
            console.log('start');
            elem.classList.remove('anim');
            isDragging = true;
            var currentPosY = getTranslate3d(elem.style.transform)[1];
            lastPosY = currentPosY ? currentPosY : 0;
        }

        var posY = ev.deltaY + lastPosY;
        elem.style.transform = setTranslate3dPosY(posY);

        // DRAG ENDED
        if (ev.isFinal) {
            console.log('end');

            elem.classList.add('anim');
            isDragging = false;

            if (Math.abs(posY) < DISPLAY_SWIPE_THRESHOLD) {
                hideswipeEl(elem);
            }
            else {
                showNow(elem);


            }

        }
    }
}

mcSwipe.add(new Hammer.Pan({
    direction: Hammer.DIRECTION_ALL,
    threshold: 0
}));
mcSwipe.on("pan", handleDrag);