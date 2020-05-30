$( document ).ready(function() {
    // console.log(window.innerWidth);
    let slider_count = 0;
    function render_slider(n)
    {
        let arr_titles = ['Кровати', 'Прикроватные тумбы', 'Комоды', 'Туалетные столики и зеркала', 'Пуфики', 'TV тумбы, Стелажи']
        let img = "images/slider_images/кровати.png"

        for (let i = 0; i < n; i++) {
            $('.slider').append('<div class="slider-card"><img class="slider-card-img" src="' + img + '"><p class = "slider-card-title">' + arr_titles[i] + "№" + i + '</p></div>')
            slider_count += 1;
            // console.log(slider_count + 'amount fo slider cards');
        }
    }
    render_slider(8);
    let letf_arrow = document.querySelector('.slider-arrow-left');
    let right_arrow = document.querySelector('.slider-arrow-right');
    let slider = document.querySelector('.slider');

    
    // document.getElementsByTagName("BODY")[0].onresize = function() {slider_func()};
    window.addEventListener("resize", slider_func);
        slider_func();

        function slider_func(){
        if (window.innerWidth >= 1440) {
            slider.style.left = 0+'px';
            let left = 0;
            let right = 0
            let slider_width = slider_count * 215 - (6 * 215);
            // console.log(window.innerWidth + 'slider WIDTH FOR >=1440PX');

            function slide_left() {
                if (left <= -215) {
                    left = left + 215;
                    slider.style.left = left + 'px';
                    // console.log(left + 'px');
                }
                ;
            };

            function slide_right() {
                if (left > slider_width * (-1)) {
                    left = left - 215;
                    slider.style.left = left + 'px';
                    // console.log(left + 'px');
                }else{
                    left = 0;
                    slider.style.left = left + 'px';
                }
            }

            letf_arrow.addEventListener('click', () => {
                slide_left();
            });
            right_arrow.addEventListener('click', () => {
                slide_right();
            });
        }

    if(window.innerWidth <= 1440 && window.innerWidth > 1024) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 250 - (4 * 250);
        // console.log(slider_width + 'slider WIDTH FOR <=1440PX');

        function slide_left() {
            if (left <= -250) {
                left = left + 250;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 250;
                slider.style.left = left + 'px';
                console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }
    if(window.innerWidth <= 1024 && window.innerWidth > 768) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 250 - (3 * 250);
        // console.log(slider_width + 'slider WIDTH FOR <=1023PX');

        function slide_left() {
            if (left <= -250) {
                left = left + 250;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 250;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }
    if(window.innerWidth <= 768 && window.innerWidth > 570) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 190 - (3 * 190);
        // console.log(slider_width + 'slider WIDTH FOR <=769PX');

        function slide_left() {
            if (left <= -190) {
                left = left + 190;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 190;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }
    if(window.innerWidth <= 570 && window.innerWidth > 525) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 222.5 - (2 * 222.5);
        // console.log(slider_width + 'slider WIDTH FOR <=570px');

        function slide_left() {
            if (left <= -222.5) {
                left = left + 222.5;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 222.5;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }
    if(window.innerWidth <= 525 && window.innerWidth > 440) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 220 - (2 * 220);
        // console.log(slider_width + 'slider WIDTH FOR <=525PX');

        function slide_left() {
            if (left <= -220) {
                left = left + 220;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 220;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }
    if(window.innerWidth <= 440 && window.innerWidth > 363) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 160 - (2 * 160);
        // console.log(slider_width + 'slider WIDTH FOR <=400PX');

        function slide_left() {
            if (left <= -160) {
                left = left + 160;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 160;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }

    if(window.innerWidth <= 363) {
        // render_slider(8);
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 155 - (2 * 155);
        // console.log(slider_width + 'slider WIDTH FOR <=320PX');

        function slide_left() {
            if (left <= -155) {
                left = left + 155;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 155;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }else{
                left = 0;
                slider.style.left = left + 'px';
            }
        }

        letf_arrow.addEventListener('click', () => {
            slide_left();
        });
        right_arrow.addEventListener('click', () => {
            slide_right();
        });
    }
            }

        
});