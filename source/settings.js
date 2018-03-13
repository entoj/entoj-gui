'use strict';

/**
 * Requirements
 * @ignore
 */
const GuiTemplateRoute = require('entoj-system').server.route.GuiTemplateRoute;


/**
 * Prepare storage for navigation entries
 */
GuiTemplateRoute.model.settings =
{
    showStatus: false,
    showLinterResults: false,
    showExtends: false
};


/**
 * Set a settings
 *
 * @param {String} name
 * @param {String} value
 */
function set(name, value)
{
    if (typeof GuiTemplateRoute.model.settings[name] == 'undefined')
    {
        return false;
    }
    GuiTemplateRoute.model.settings[name] = value;
    return true;
}


/**
 * Updates settings
 *
 * @param {Object} values
 */
function update(values)
{
    for (const key in values)
    {
        set(key, values[key]);
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.set = set;
module.exports.update = update;
