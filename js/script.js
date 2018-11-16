var app = document.getElementById('sub-heading');

var typewriter = new Typewriter(app, {
    loop: true
});

// new WOW().init();

typewriter.typeString('Ingenious Creature')
    .pauseFor(2500)
    .deleteAll()
    .start();