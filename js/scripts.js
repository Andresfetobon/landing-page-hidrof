// scroll librery init
AOS.init(); 


//navbar init

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  console.log(instances)
});


// Carrusel Init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
   console.log(instances)

  });

  var options = {
    indicator: true,
    numVisible: 5,
    padding: 15,
  } 