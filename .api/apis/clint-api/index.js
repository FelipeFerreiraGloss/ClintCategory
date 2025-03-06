"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'clint-api/1.0.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Retrieve a list of fields
     *
     * @summary List fields
     */
    SDK.prototype.getAccountFields = function (metadata) {
        return this.core.fetch('/account/fields', 'get', metadata);
    };
    /**
     * Retrieve a paginated list of contacts
     *
     * @summary List contacts
     */
    SDK.prototype.getContacts = function (metadata) {
        return this.core.fetch('/contacts', 'get', metadata);
    };
    /**
     * Create a new Contact
     *
     * @summary Create contact
     */
    SDK.prototype.postContacts = function (body, metadata) {
        return this.core.fetch('/contacts', 'post', body, metadata);
    };
    /**
     * Retrieve a single contact by ID
     *
     * @summary Get contact
     */
    SDK.prototype.getContactsId = function (metadata) {
        return this.core.fetch('/contacts/{id}', 'get', metadata);
    };
    /**
     * Update a single contact
     *
     * @summary Update contact
     */
    SDK.prototype.postContactsId = function (body, metadata) {
        return this.core.fetch('/contacts/{id}', 'post', body, metadata);
    };
    /**
     * Remove a single contact by ID
     *
     * @summary Remove contact
     */
    SDK.prototype.deleteContactsId = function (metadata) {
        return this.core.fetch('/contacts/{id}', 'delete', metadata);
    };
    /**
     * Add tags to a single contact
     *
     * @summary Add tags
     */
    SDK.prototype.postContactsIdTags = function (body, metadata) {
        return this.core.fetch('/contacts/{id}/tags', 'post', body, metadata);
    };
    /**
     * Remove a tag from a contact
     *
     * @summary Remove tag
     * @throws FetchError<400, types.DeleteContactsIdTagsResponse400> Bad Request
     */
    SDK.prototype.deleteContactsIdTags = function (metadata) {
        return this.core.fetch('/contacts/{id}/tags', 'delete', metadata);
    };
    /**
     * Retrieve a paginated list of deals
     *
     * @summary List deals
     */
    SDK.prototype.getDeals = function (metadata) {
        return this.core.fetch('/deals', 'get', metadata);
    };
    /**
     * Create a new Deal
     *
     * @summary Create deal
     */
    SDK.prototype.postDeals = function (body, metadata) {
        return this.core.fetch('/deals', 'post', body, metadata);
    };
    /**
     * Retrieve a single deal by ID
     *
     * @summary Get deal
     */
    SDK.prototype.getDealsId = function (metadata) {
        return this.core.fetch('/deals/{id}', 'get', metadata);
    };
    /**
     * Update a single deal
     *
     * @summary Update deal
     */
    SDK.prototype.postDealsId = function (body, metadata) {
        return this.core.fetch('/deals/{id}', 'post', body, metadata);
    };
    /**
     * Remove a single deal by ID
     *
     * @summary Remove deal
     */
    SDK.prototype.deleteDealsId = function (metadata) {
        return this.core.fetch('/deals/{id}', 'delete', metadata);
    };
    /**
     * Retrieve a paginated list of groups
     *
     * @summary List groups
     */
    SDK.prototype.getGroups = function (metadata) {
        return this.core.fetch('/groups', 'get', metadata);
    };
    /**
     * Retrieve a single group by ID
     *
     * @summary Get group
     */
    SDK.prototype.getGroupsId = function (metadata) {
        return this.core.fetch('/groups/{id}', 'get', metadata);
    };
    /**
     * Retrieve a paginated list of lost status
     *
     * @summary List lost status
     */
    SDK.prototype.getLostStatus = function (metadata) {
        return this.core.fetch('/lost-status', 'get', metadata);
    };
    /**
     * Retrieve a single lost status by ID
     *
     * @summary Get lost status
     */
    SDK.prototype.getLostStatusId = function (metadata) {
        return this.core.fetch('/lost-status/{id}', 'get', metadata);
    };
    /**
     * Retrieve a paginated list of origins
     *
     * @summary List origins
     */
    SDK.prototype.getOrigins = function (metadata) {
        return this.core.fetch('/origins', 'get', metadata);
    };
    /**
     * Retrieve a single origin by ID
     *
     * @summary Get origin
     */
    SDK.prototype.getOriginsId = function (metadata) {
        return this.core.fetch('/origins/{id}', 'get', metadata);
    };
    /**
     * Retrieve a paginated list of tags
     *
     * @summary List tags
     */
    SDK.prototype.getTags = function (metadata) {
        return this.core.fetch('/tags', 'get', metadata);
    };
    /**
     * Create a new tag
     *
     * @summary Create tag
     */
    SDK.prototype.postTags = function (body, metadata) {
        return this.core.fetch('/tags', 'post', body, metadata);
    };
    /**
     * Retrieve a single tag by ID
     *
     * @summary Get tag
     */
    SDK.prototype.getTagsId = function (metadata) {
        return this.core.fetch('/tags/{id}', 'get', metadata);
    };
    /**
     * Remove a single tag by ID
     *
     * @summary Remove tag
     */
    SDK.prototype.deleteTagsId = function (metadata) {
        return this.core.fetch('/tags/{id}', 'delete', metadata);
    };
    /**
     * Retrieve a paginated list of users
     *
     * @summary List users
     */
    SDK.prototype.getUsers = function (metadata) {
        return this.core.fetch('/users', 'get', metadata);
    };
    /**
     * Retrieve a single user by ID
     *
     * @summary Get user
     */
    SDK.prototype.getUsersId = function (metadata) {
        return this.core.fetch('/users/{id}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
