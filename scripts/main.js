;(function($){
    $(function (){
///Плавная прокрутка переходов о ссылкам
        $("body").on('click', '[href*="#"]', function(e){
            let fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
///Модальное окно
        $('.button-hire').on('click', function () {
            $('.menu_pop-up, .background').show();
        });
        $('#close').on('click',function () {
            $('.menu_pop-up, .background').hide();
        });
///Гамбургер меню
        $('.menu-hamb label').click(function() {
            var clicks = $(this).data('clicks');
            if (clicks) {
                $('.menu-hamb').css('background', 'none');
            } else {
                $('.menu-hamb').css('background', '#194277');
            }
            $(this).data("clicks", !clicks);
        });
        //Клик вне мод окна закрывает само окно
        $('html').mouseup(function (e) {
            let container = $(".menu_pop-up");
            if (container.has(e.target).length === 0){
                container.hide();
                $('.background').hide();
            }
        });
/////////////////////////////////////////////////////
        });
})(jQuery);

