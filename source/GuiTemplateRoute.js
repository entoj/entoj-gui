'use strict';

/**
 * Requirements
 * @ignore
 */
const BaseGuiTemplateRoute = require('entoj-system').server.route.GuiTemplateRoute;
const UrlsConfiguration = require('entoj-system').model.configuration.UrlsConfiguration;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const PathesConfiguration = require('entoj-system').model.configuration.PathesConfiguration;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const EntitiesRepository = require('entoj-system').model.entity.EntitiesRepository;
const EntityCategoriesRepository = require('entoj-system').model.entity.EntityCategoriesRepository;
const SitesRepository = require('entoj-system').model.site.SitesRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const Environment = require('entoj-system').nunjucks.Environment;
const path = require('path');
const navigation = require('./navigation.js');


/**
 * @memberOf server.route
 */
class GuiTemplateRoute extends BaseGuiTemplateRoute
{
    /**
     * @param {cli.CliLogger} cliLogger
     * @param {model.site.SitesRepository} sitesRepository
     * @param {model.entity.EntityCategoriesRepository} entityCategoriesRepository
     * @param {model.entity.EntitiesRepository} entitiesRepository
     * @param {model.configuration.GlobalConfiguration} globalConfiguration
     * @param {model.configuration.UrlsConfiguration} urlsConfiguration
     * @param {model.configuration.PathesConfiguration} pathesConfiguration
     * @param {model.configuration.BuildConfiguration} buildConfiguration
     * @param {nunjucks.Environment} nunjucks
     */
    constructor(cliLogger, sitesRepository, entityCategoriesRepository, entitiesRepository, globalConfiguration,
                urlsConfiguration, pathesConfiguration, buildConfiguration, nunjucks)
    {
        const options =
        {
            templatePaths: path.resolve(__dirname + '/template'),
            staticRoute: '/_'
        };
        super(cliLogger.createPrefixed('gui'), sitesRepository, entityCategoriesRepository, entitiesRepository, globalConfiguration,
                urlsConfiguration, pathesConfiguration, buildConfiguration, nunjucks, [], options);
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, SitesRepository, EntityCategoriesRepository, EntitiesRepository,
                                GlobalConfiguration, UrlsConfiguration, PathesConfiguration, BuildConfiguration, Environment] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'server.routes/GuiPagesRoute';
    }


    /**
     * @inheritDocs
     */
    register(express)
    {
        const promise = super.register(express);
        promise.then(() =>
        {
            // Add templates
            this.addTemplateHandler('/', 'sites.j2');
            this.addTemplateHandler('/:site', 'entityCategories.j2');
            this.addTemplateHandler('/:site/:entityCategory', 'entityCategory.j2');
            this.addTemplateHandler('/:site/:entityCategory/:entityId', 'entity.j2');
            this.addTemplateHandler('/:site/:entityCategory/:entityId/examples', 'entityExamples.j2');
            this.addTemplateHandler('/:site/:entityCategory/:entityId/documentation', 'entityDocumentation.j2');

            // Add static files
            const staticPath = (url) =>
            {
                return path.join(this.templatePaths[0], url.substr(2));
            };
            this.addStaticFileHandler('/_/*', staticPath, ['.png', '.js', '.css', '.woff', '.woff2']);
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GuiTemplateRoute = GuiTemplateRoute;
