(function()
{
    // Update entities to reflect search settings
    function updateSearch()
    {
        // Prepare
        var states = { concept:[], frontend:[], integration:[] };
        $('.content-navigation .state.popup .item').each(function()
        {
            var $item = $(this);
            if ($item.hasClass('selected'))
            {
                var $items = $item.closest('.list');
                var type = 'concept';
                if ($items.hasClass('frontend'))
                {
                    type = 'frontend';
                }
                if ($items.hasClass('integration'))
                {
                    type = 'integration';
                }
                states[type].push($item.text().toLowerCase());
            }
        });
        var search = $('.content-navigation .search.input input').val();
        var matcher = new RegExp(search, 'i');

        // Search entities
        $('.entity').each(function()
        {
            $entity = $(this);
            var textMatches = false;

            // Text matches
            if (matcher.test($('.header', $entity).text()))
            {
                textMatches = true;
            }
            if (!textMatches && matcher.test($('.description', $entity).text()))
            {
                textMatches = true;
            }

            // State matches
            var stateMatches = (states.concept.indexOf($entity.find('.state.concept .value').text().toLowerCase()) !== -1) &&
                (states.frontend.indexOf($entity.find('.state.frontend .value').text().toLowerCase()) !== -1) &&
                (states.integration.indexOf($entity.find('.state.integration .value').text().toLowerCase()) !== -1);
            stateMatches = true;

            // Show / Hide entities
            if (textMatches && stateMatches)
            {
                $entity.show();
            }
            else
            {
                $entity.hide();
            }
        });

        // Show / Hide categories
        $('.entitycategory').each(function()
        {
            $entityCategory = $(this);
            $entityCategory.show();
            if ($('.entity:visible', $entityCategory).length === 0)
            {
                $entityCategory.hide();
            }
        });
    }


    // States
    $('.content-navigation .browse.item').popup(
    {
        on: 'click',
        popup: '.content-navigation .state.popup',
        position: 'top center',
        inline: true,
        distanceAway: -8
    });
    $('.content-navigation .state.popup .item').on('click', function()
    {
        var $item = $(this);
        $item.toggleClass('selected');
        updateSearch();
    });


    // Search
    $('.content-navigation .search.input').on('input', function(e)
    {
        updateSearch();
    });


    // Linter
    $('[data-popup-id]').each(function (index, element)
    {
        $this = $(this);
        $this.popup(
            {
                popup: '#' + $this.data('popup-id')
            });
    });

    $('.ui.modal').modal();
    $('.ui.menu .item').tab();
    $('[data-modal-id]').each(function (index, element)
    {
        $this = $(this);
        $this.on('click', () =>
            {
                $('#' + $this.data('modal-id')).modal('show');
            });
    });
})();
