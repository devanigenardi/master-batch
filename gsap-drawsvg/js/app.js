var path = anime.path('.path');

anime({
    targets: '#emoji',
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    duration: 20000,
    loop: true
});

anime({
    targets: '.poligon',
    points: [
        {value: '9.5,0.3 20.4,0.3 20.4,20.5 10,20.5 0.2,20.5 0.2,0.3'},
        {value: '10,0.5 12.9,11.4 20.2,20.2 10.2,17.5 0.4,20.2 7.3,11.6'},
        {value: '9.5,0.3 20.4,0.3 20.4,20.5 10,20.5 0.2,20.5 0.2,0.3'},
        {value: '10,0.5 12.9,11.4 20.2,20.2 10.2,17.5 0.4,20.2 7.3,11.6'}
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true,
    direction: 'alternate'
})

anime({
    targets: '#text-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutQuad',
    duration: 7000,
    loop: true,
    direction: 'alternate'
})