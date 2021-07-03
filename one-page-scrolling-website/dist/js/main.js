$(document).ready(function() {
	$('#pagepiling').pagepiling({
        direction: 'horizontal',
        verticalCentered: true,
        scrollingSpeed: 700,
        easing: 'ease-in',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', 'salmon'],
        anchors: ['home', 'about', 'blog', 'work', 'contact'],
        menu: '#myMenu',
        navigation: {
            'textColor': '#bbb',
            'bulletsColor': '#eee',
            'position': 'right',
            'tooltips': ['home', 'about', 'blog', 'work', 'contact']
        },
    });
});