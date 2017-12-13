'use strict';

/**
 * Registers with default configurations
 */
function register(configuration, options)
{
    // Nunjucks filter
    configuration.mappings.add(require('entoj-system').nunjucks.Environment,
        {
            '!filters':
            [
                require('./nunjucks/index.js').filter.GuiSettingFilter
            ]
        }
    );

    // Routes
    configuration.commands.add(require('entoj-system').command.ServerCommand,
        {
            options:
            {
                routes:
                [
                    {
                        type: require('./server/index.js').route.GuiTemplateRoute
                    }
                ]
            }
        });
}


/**
 * Exports
 * @ignore
 */
module.exports =
{
    register: register,
    templateRoot: require('path').resolve(__dirname + '/template'),
    navigation: require('./navigation.js'),
    nunjucks: require('./nunjucks/index.js'),
    server: require('./server/index.js')
};
