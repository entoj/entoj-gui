'use strict';

const GuiTemplateRoute = require('entoj-system').server.route.GuiTemplateRoute;


/**
 * Storage
 *
 * @type {Object}
 */
if (!GuiTemplateRoute.model)
{
    GuiTemplateRoute.model = {};
}


function add(name, value)
{
    GuiTemplateRoute.model[name] = value;
}


/**
 */
module.exports.add = add;
