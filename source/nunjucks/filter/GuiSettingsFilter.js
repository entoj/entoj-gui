'use strict';

/**
 * Requirements
 * @ignore
 */
const Filter = require('entoj-system').nunjucks.filter.Filter;


/**
 * @memberOf nunjucks.filter
 */
class GuiSettingsFilter extends Filter
{
    /**
     */
    constructor()
    {
        super();
        this._name = 'guiSettings';
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'nunjucks.filter/GuiSettingsFilter';
    }


    /**
     * @inheritDocs
     */
    filter()
    {
        const scope = this;
        return function (value, entity)
        {
            const globals = (this && this.env && this.env.globals)
                ? this.env.globals
                : { location: {} };

            // Get the request
            const request = (globals.request)
                ? globals.request
                : false;
            if (!request)
            {
                return value;
            }

            // Get the current entity
            const e = globals.location
                ? globals.location.entity || false
                : entity;
            if (!e)
            {
                return value;
            }

            // Get settings
            const settings = e.properties.getByPath('examples.settings', []);
            if (!settings.length)
            {
                return value;
            }

            // Get settings
            let result = '';
            for (const setting of settings)
            {
                result+= setting.name + '=' + (request.query[setting.name] || setting.default) + '&';
            }
            return value + '?' + result;
        };
    }
}

/**
 * Exports
 * @ignore
 */
module.exports.GuiSettingsFilter = GuiSettingsFilter;
