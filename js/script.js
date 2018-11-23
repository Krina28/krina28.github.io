var app = document.getElementById('sub-heading');

var typewriter = new Typewriter(app, {
    loop: true
});

// new WOW().init();

typewriter.typeString('Ingenious Creature')
    .pauseFor(2500)
    .deleteAll()
    .start();

var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry('.grid', {
    // options
});