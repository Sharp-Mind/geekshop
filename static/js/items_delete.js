// При работе с назначением отслеживания новых событий - необходимо дождаться, пока весь DOM
// будет сформирован. Только после этого начинаем добавлять обработчики.
$(document).ready(function () {

    $('[name=button_user_delete]').click((el) => {
        // Как видите - все нужные свойства просто забираем из элемента ссылки
        $.ajax({
            url: el.target.getAttribute("deleteUrl"),
            success: function (data) {
                $("[data-pk='" + el.target.getAttribute("data-pk") + "']").addClass('not_active');
                console.log(data);
            },
        });
    });

    $('[name=button_cat_delete]').click((el) => {
        // Как видите - все нужные свойства просто забираем из элемента ссылки
        $.ajax({
            url: el.target.getAttribute("deleteUrl"),
            success: function (data) {
                $("[data-pk='" + el.target.getAttribute("data-pk") + "']").addClass('not_active');
                console.log(data);
            },
        });
    });

});