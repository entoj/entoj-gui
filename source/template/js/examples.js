$(function()
{
    // Semantic ui
    $('select.dropdown').dropdown();

    // Example settings
    $('.ui.search.dropdown')
        .dropdown(
        {
            allowAdditions: true
        });
    $('.ui.select.dropdown')
        .dropdown(
        {
        });
    $('.ui.item.settings').on('click', function(e)
    {
        $('.ui.modal.settings').modal('show');
    });
    $('.ui.modal.settings')
        .modal(
        {
            onApprove: ($element) =>
            {
                var $form = $element.parents('.ui.modal').find('form');
                var data = $form.serializeArray();
                var url = new URL('https://localhost:3000' + $('iframe.view').attr('src'));
                url.search = '?' + $form.serialize();
                $('iframe.view').attr('src', url.toString());
                return true;
            }
        });

    // Url
    $('.dropdown.example select').on('change', function(e)
    {
        $('iframe.view').attr('src', $(this).val());
    });

    // Size
    $('.dropdown.device select').on('change', function(e)
    {
        if (!$(this).val())
        {
            $('iframe.view').css('width', '100%');
        }
        else
        {
            $('iframe.view').css('width', $(this).val());
        }
    });

    // Open
    $('a.open').on('click', function(e)
    {
        window.open($('iframe.view').attr('src'));
    });

    // Open first url
    $('.dropdown.example select').trigger('change');
});
