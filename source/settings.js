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
    showStatus: true
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
 * Exports
 * @ignore
 */
module.exports.set = set;
