// let theName = null;
$('button').on('click', function () {
    console.log('qwe');
    // $(this).text() == 'удалить' ?
    if ($(this).find('a').html() == 'удалить') {
        console.log('123123');
        let target_href = event.target;
        if (target_href) {
            $.ajax({
                url: "/users/delete/" + target_href.data.pk + "/",
                success: function (data) {
                    $(`'.user_record[data-pk="${data.user_to_delete}"]`).addClass('not_active')
                    console.log('ajax done');
                },
            });
        };
        event.preventDefault();
    };
});


//.$(`img[alt="${data.user_to_delete}"]`)