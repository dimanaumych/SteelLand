$( document ).ready(function() {
    //
    let arr_titless = ['Кровати', 'Прикроватные тумбы', 'Комоды','Туалетные столики и зеркала','Пуфики','TV тумбы, Стелажи']
    let arr_prices = [1000, 3900, 9230, 8600, 5400, 11000];
    let img = "images/slider_images/кровати.png";
    for(let y = 0; y < 1; y++) {
        for (let i = 1; i < arr_titless.length; i++) {
            for (let i = 1; i < arr_prices.length; i++) {
                $('.catalog_wrapper').append('<div class="catalog-card"><img class="catalog-card-img" src="' + img + '"><p class = "catalog-card-title">' + arr_titless[i] + '</p><p class="catalog-card-price">От ' + arr_prices[i] + ' грн</p></div>');
                // console.log(arr_titless[i]);
            }
        }
    }

    // console.log($('.catalog_wrapper'));
});