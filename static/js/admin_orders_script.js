window.onload = function () {
    $("[name='status_swithcher']").click(function () {
        $.ajax({
            url: '/admin/orders/update/' + event.target.parentNode.parentNode.getAttribute("data-pk") + '/status/' + event.target.getAttribute('data-status'),
            success: function (data) {
                data.new_status = data.new_status[0].toUpperCase() + data.new_status.substring(1);
                $('[name="current_status"]').html(data.new_status);
            },
        });
    });
};