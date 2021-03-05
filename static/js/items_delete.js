$(document).ready(function () {
    function deleteItem(el) {
        $.ajax({
            url: el.target.getAttribute("deleteUrl"),
            success: function (data) {
                $("[data-pk='" + el.target.getAttribute("data-pk") + "']").addClass('not_active');
                console.log(data);
            },
        });
    };
    $('[name=button_cat_delete]').click((el) => deleteItem(el));
    $('[name=button_user_delete]').click((el) => deleteItem(el));
});

