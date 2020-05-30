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
            let slider_width = slider_count * 300 - (3 * 300);
            // console.log(window.innerWidth);

            function slide_left() {
                if (left <= -300) {
                    left = left + 300;
                    slider.style.left = left + 'px';
                    // console.log(left + 'px');
                };
            };

            function slide_right() {
                if (left > slider_width * (-1)) {
                    left = left - 300;
                    slider.style.left = left + 'px';
                    // console.log(left + 'px');
                }
                else{
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
        let slider_width = slider_count * 300 - (3 * 300);

        function slide_left() {
            if (left <= -300) {
                left = left + 300;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 300;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            else{
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
        let slider_width = slider_count * 240 - (3 * 240);

        function slide_left() {
            if (left <= -240) {
                left = left + 240;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 240;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            else{
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
    if(window.innerWidth <= 768 && window.innerWidth > 425) {
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 135 - (3 * 135);

        function slide_left() {
            if (left <= -135) {
                left = left + 135;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 135;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            else{
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

    if(window.innerWidth <= 425 && window.innerWidth > 375) {
        slider.style.left = 0+'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 115 - (3 * 115);
        // console.log(slider_width + ' 425 - 375');

        function slide_left() {
            if (left <= -115) {
                left = left + 115;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 115;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            else{
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
    if(window.innerWidth <= 375) {
        slider.style.left = 0 + 'px';
        let left = 0;
        let right = 0
        let slider_width = slider_count * 105 - (3 * 105);
        // console.log(slider_width);

        function slide_left() {
            if (left <= -105) {
                left = left + 105;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            ;
        };

        function slide_right() {
            if (left > slider_width * (-1)) {
                left = left - 105;
                slider.style.left = left + 'px';
                // console.log(left + 'px');
            }
            else{
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