import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Retrieve a list of fields
     *
     * @summary List fields
     */
    getAccountFields(metadata: types.GetAccountFieldsMetadataParam): Promise<FetchResponse<200, types.GetAccountFieldsResponse200>>;
    /**
     * Retrieve a paginated list of contacts
     *
     * @summary List contacts
     */
    getContacts(metadata: types.GetContactsMetadataParam): Promise<FetchResponse<200, types.GetContactsResponse200>>;
    /**
     * Create a new Contact
     *
     * @summary Create contact
     */
    postContacts(body: types.PostContactsBodyParam, metadata: types.PostContactsMetadataParam): Promise<FetchResponse<201, types.PostContactsResponse201>>;
    /**
     * Retrieve a single contact by ID
     *
     * @summary Get contact
     */
    getContactsId(metadata: types.GetContactsIdMetadataParam): Promise<FetchResponse<200, types.GetContactsIdResponse200>>;
    /**
     * Update a single contact
     *
     * @summary Update contact
     */
    postContactsId(body: types.PostContactsIdBodyParam, metadata: types.PostContactsIdMetadataParam): Promise<FetchResponse<200, types.PostContactsIdResponse200>>;
    /**
     * Remove a single contact by ID
     *
     * @summary Remove contact
     */
    deleteContactsId(metadata: types.DeleteContactsIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add tags to a single contact
     *
     * @summary Add tags
     */
    postContactsIdTags(body: types.PostContactsIdTagsBodyParam, metadata: types.PostContactsIdTagsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove a tag from a contact
     *
     * @summary Remove tag
     * @throws FetchError<400, types.DeleteContactsIdTagsResponse400> Bad Request
     */
    deleteContactsIdTags(metadata: types.DeleteContactsIdTagsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve a paginated list of deals
     *
     * @summary List deals
     */
    getDeals(metadata: types.GetDealsMetadataParam): Promise<FetchResponse<200, types.GetDealsResponse200>>;
    /**
     * Create a new Deal
     *
     * @summary Create deal
     */
    postDeals(body: types.PostDealsBodyParam, metadata: types.PostDealsMetadataParam): Promise<FetchResponse<201, types.PostDealsResponse201>>;
    /**
     * Retrieve a single deal by ID
     *
     * @summary Get deal
     */
    getDealsId(metadata: types.GetDealsIdMetadataParam): Promise<FetchResponse<200, types.GetDealsIdResponse200>>;
    /**
     * Update a single deal
     *
     * @summary Update deal
     */
    postDealsId(body: types.PostDealsIdBodyParam, metadata: types.PostDealsIdMetadataParam): Promise<FetchResponse<200, types.PostDealsIdResponse200>>;
    /**
     * Remove a single deal by ID
     *
     * @summary Remove deal
     */
    deleteDealsId(metadata: types.DeleteDealsIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve a paginated list of groups
     *
     * @summary List groups
     */
    getGroups(metadata: types.GetGroupsMetadataParam): Promise<FetchResponse<200, types.GetGroupsResponse200>>;
    /**
     * Retrieve a single group by ID
     *
     * @summary Get group
     */
    getGroupsId(metadata: types.GetGroupsIdMetadataParam): Promise<FetchResponse<200, types.GetGroupsIdResponse200>>;
    /**
     * Retrieve a paginated list of lost status
     *
     * @summary List lost status
     */
    getLostStatus(metadata: types.GetLostStatusMetadataParam): Promise<FetchResponse<200, types.GetLostStatusResponse200>>;
    /**
     * Retrieve a single lost status by ID
     *
     * @summary Get lost status
     */
    getLostStatusId(metadata: types.GetLostStatusIdMetadataParam): Promise<FetchResponse<200, types.GetLostStatusIdResponse200>>;
    /**
     * Retrieve a paginated list of origins
     *
     * @summary List origins
     */
    getOrigins(metadata: types.GetOriginsMetadataParam): Promise<FetchResponse<200, types.GetOriginsResponse200>>;
    /**
     * Retrieve a single origin by ID
     *
     * @summary Get origin
     */
    getOriginsId(metadata: types.GetOriginsIdMetadataParam): Promise<FetchResponse<200, types.GetOriginsIdResponse200>>;
    /**
     * Retrieve a paginated list of tags
     *
     * @summary List tags
     */
    getTags(metadata: types.GetTagsMetadataParam): Promise<FetchResponse<200, types.GetTagsResponse200>>;
    /**
     * Create a new tag
     *
     * @summary Create tag
     */
    postTags(body: types.PostTagsBodyParam, metadata: types.PostTagsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve a single tag by ID
     *
     * @summary Get tag
     */
    getTagsId(metadata: types.GetTagsIdMetadataParam): Promise<FetchResponse<200, types.GetTagsIdResponse200>>;
    /**
     * Remove a single tag by ID
     *
     * @summary Remove tag
     */
    deleteTagsId(metadata: types.DeleteTagsIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve a paginated list of users
     *
     * @summary List users
     */
    getUsers(metadata: types.GetUsersMetadataParam): Promise<FetchResponse<200, types.GetUsersResponse200>>;
    /**
     * Retrieve a single user by ID
     *
     * @summary Get user
     */
    getUsersId(metadata: types.GetUsersIdMetadataParam): Promise<FetchResponse<200, types.GetUsersIdResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
