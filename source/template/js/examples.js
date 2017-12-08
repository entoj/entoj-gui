$(function()
{
    // Semantic ui
    $('select.dropdown').dropdown();

    // Example settings
    $('.ui.normal.dropdown')
        .dropdown(
        {
            allowAdditions: true
        });
    $('.navigation.settings').on('click', function(e)
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
                console.log($form.serialize(), data);
                $('iframe.view').attr('src', $('.dropdown.example select').val() + '?' + $form.serialize());
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

console.log('Opening change....');

    // Open first url
    $('.dropdown.example select').trigger('change');
});
