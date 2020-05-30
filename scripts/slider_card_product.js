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
        if (window.innerWidth > 1440) {
            slider.style.left = 0+'px';
            let left = 0;
            let right = 0
            let slider_width = slider_count * 427 - (3 * 427);
            // console.log(slider_width + '>1440px')

            function slide_left() {
                if (left <= -427) {
                    left = left + 427;
                    slider.style.left = left + 'px';
                    // console.log(left + 'px');
                }
                ;
            };

            function slide_right() {
                if (left > slider_width * (-1)) {
                    left = left - 427;
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
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 334 - (3 * 334);
        // console.log(slider_width + '<=1440px')

        function slide_left() {
            if (left <= -334) {
                left = left + 334;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 334;
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
    if(window.innerWidth <= 1024 && window.innerWidth > 768) {
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 247 - (3 * 247);
        // console.log(slider_width + '<=1023px')

        function slide_left() {
            if (left <= -247) {
                left = left + 247;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 247;
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
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 187 - (3 * 187);
        // console.log(slider_width + '<=769px')

        function slide_left() {
            if (left <= -187) {
                left = left + 187;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 187;
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
    if(window.innerWidth <= 570 && window.innerWidth > 445) {
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 142 - (3 * 142);
        // console.log(slider_width + '< 570px')

        function slide_left() {
            if (left <= -142) {
                left = left + 142;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 142;
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

    if(window.innerWidth <= 445) {
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 160 - (2 * 160);
        // console.log(slider_width + '< 445px');
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
            }

        
});