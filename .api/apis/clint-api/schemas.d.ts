declare const DeleteContactsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
};
declare const DeleteContactsIdTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly tag_id: {
                    readonly type: "string";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the tag to be removed";
                };
                readonly tag_name: {
                    readonly type: "string";
                    readonly examples: readonly ["my-tag"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the tag to be removed";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["You must provide either a tag id or a tag name"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteDealsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
};
declare const DeleteTagsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
};
declare const GetAccountFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly groups: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly DEAL: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly CONTACT: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly ORGANIZATION: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly fields: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly DEAL: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["TEXT"];
                                            };
                                            readonly group: {
                                                readonly type: "string";
                                                readonly examples: readonly ["default"];
                                            };
                                            readonly label: {
                                                readonly type: "string";
                                                readonly examples: readonly ["notes"];
                                            };
                                        };
                                    };
                                    readonly CONTACT: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["TEXT"];
                                            };
                                            readonly group: {
                                                readonly type: "string";
                                                readonly examples: readonly ["default"];
                                            };
                                            readonly label: {
                                                readonly type: "string";
                                                readonly examples: readonly ["notes"];
                                            };
                                        };
                                    };
                                    readonly ORGANIZATION: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["TEXT"];
                                            };
                                            readonly group: {
                                                readonly type: "string";
                                                readonly examples: readonly ["default"];
                                            };
                                            readonly label: {
                                                readonly type: "string";
                                                readonly examples: readonly ["notes"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetContacts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
                readonly origin_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by origin ID";
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Contact name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact name";
                };
                readonly ddi: {
                    readonly type: "string";
                    readonly examples: readonly ["55"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact ddi";
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["999999999"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact phone";
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["contact@email.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact e-mail";
                };
                readonly tag_ids: {
                    readonly type: "string";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8,99999999-d77b-4e8b-9d35-fd43e972b999"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact tag IDs using OR operator. Separated by ','";
                };
                readonly tag_names: {
                    readonly type: "string";
                    readonly examples: readonly ["tag1,tag2,tag3"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact tag names using OR operator. Separated by ','";
                };
                readonly fields: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact fields. Can be used multiple times for each field";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Contact name"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["contact@email.com"];
                            };
                            readonly organization: {
                                readonly type: "string";
                                readonly examples: readonly ["Organization name"];
                            };
                            readonly instagram: {
                                readonly type: "string";
                                readonly examples: readonly ["Instagram ID"];
                            };
                            readonly tags: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly format: "uuid";
                                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Tag name"];
                                        };
                                        readonly color: {
                                            readonly type: "string";
                                            readonly default: "#f44336";
                                            readonly enum: readonly ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#faa200", "#ff9800", "#ff5722", "#795548", "#607d8b"];
                                            readonly description: "`#f44336` `#e91e63` `#9c27b0` `#673ab7` `#3f51b5` `#2196f3` `#03a9f4` `#00bcd4` `#009688` `#4caf50` `#8bc34a` `#faa200` `#ff9800` `#ff5722` `#795548` `#607d8b`";
                                        };
                                    };
                                };
                            };
                            readonly fields: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly fullPhone: {
                                readonly type: "string";
                                readonly examples: readonly ["+5548999999999"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetContactsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Contact name"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["contact@email.com"];
                        };
                        readonly organization: {
                            readonly type: "string";
                            readonly examples: readonly ["Organization name"];
                        };
                        readonly instagram: {
                            readonly type: "string";
                            readonly examples: readonly ["Instagram ID"];
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly format: "uuid";
                                        readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Tag name"];
                                    };
                                    readonly color: {
                                        readonly type: "string";
                                        readonly default: "#f44336";
                                        readonly enum: readonly ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#faa200", "#ff9800", "#ff5722", "#795548", "#607d8b"];
                                        readonly description: "`#f44336` `#e91e63` `#9c27b0` `#673ab7` `#3f51b5` `#2196f3` `#03a9f4` `#00bcd4` `#009688` `#4caf50` `#8bc34a` `#faa200` `#ff9800` `#ff5722` `#795548` `#607d8b`";
                                    };
                                };
                            };
                        };
                        readonly fields: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly fullPhone: {
                            readonly type: "string";
                            readonly examples: readonly ["+5548999999999"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDeals: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
                readonly origin_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by origin ID";
                };
                readonly created_at_start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by created_at using GTE operator";
                };
                readonly created_at_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by created_at using LTE operator";
                };
                readonly updated_at_start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by updated_at using GTE operator";
                };
                readonly updated_at_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by updated_at using LTE operator";
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by user ID";
                };
                readonly user_email: {
                    readonly type: "string";
                    readonly examples: readonly ["user@email.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by user e-mail";
                };
                readonly contact_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact ID";
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["999999999"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact phone";
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["contact@email.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact e-mail";
                };
                readonly tag_ids: {
                    readonly type: "string";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8,99999999-d77b-4e8b-9d35-fd43e972b999"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by tag IDs using OR operator. Separated by ','";
                };
                readonly tag_names: {
                    readonly type: "string";
                    readonly examples: readonly ["tag1,tag2,tag3"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by tag names using OR operator. Separated by ','";
                };
                readonly status: {
                    readonly type: "string";
                    readonly default: "OPEN";
                    readonly enum: readonly ["OPEN", "WON", "LOST"];
                    readonly description: "Filter by status";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly stage: {
                    readonly type: "string";
                    readonly default: "BASE";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by stage";
                };
                readonly updated_stage_at_start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by updated_stage_at using GTE operator";
                };
                readonly updated_stage_at_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by updated_stage_at using LTE operator";
                };
                readonly fields: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by contact fields. Can be used multiple times for each field";
                };
                readonly won_at_start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by won_at using GTE operator";
                };
                readonly won_at_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by won_at using LTE operator";
                };
                readonly lost_at_start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by lost_at using GTE operator";
                };
                readonly lost_at_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by lost_at_at using LTE operator";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly origin_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly user: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly format: "uuid";
                                        readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                    };
                                    readonly full_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["User full name"];
                                    };
                                };
                            };
                            readonly contact: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly format: "uuid";
                                        readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Contact name"];
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly examples: readonly ["contact@email.com"];
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly examples: readonly ["+5548999999999"];
                                    };
                                };
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly stage: {
                                readonly type: "string";
                                readonly default: "BASE";
                            };
                            readonly updated_stage_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly default: "OPEN";
                                readonly enum: readonly ["OPEN", "WON", "LOST"];
                                readonly description: "`OPEN` `WON` `LOST`";
                            };
                            readonly won_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly won_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly lost_status_id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly lost_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly lost_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly fields: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDealsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly origin_id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly user: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly format: "uuid";
                                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                };
                                readonly full_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["User full name"];
                                };
                            };
                        };
                        readonly contact: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly format: "uuid";
                                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Contact name"];
                                };
                                readonly email: {
                                    readonly type: "string";
                                    readonly examples: readonly ["contact@email.com"];
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly examples: readonly ["+5548999999999"];
                                };
                            };
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly stage: {
                            readonly type: "string";
                            readonly default: "BASE";
                        };
                        readonly updated_stage_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly default: "OPEN";
                            readonly enum: readonly ["OPEN", "WON", "LOST"];
                            readonly description: "`OPEN` `WON` `LOST`";
                        };
                        readonly won_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly won_by: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly lost_status_id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly lost_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly lost_by: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly fields: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGroups: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Group name"];
                            };
                            readonly archived_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly archived_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGroupsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Group name"];
                        };
                        readonly archived_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly archived_by: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLostStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Lost status name"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLostStatusId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Lost status name"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOrigins: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
                readonly group_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by group ID";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Origin name"];
                            };
                            readonly group: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly format: "uuid";
                                        readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Group name"];
                                    };
                                };
                            };
                            readonly archived_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                            };
                            readonly archived_by: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOriginsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Origin name"];
                        };
                        readonly group: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly format: "uuid";
                                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Group name"];
                                };
                            };
                        };
                        readonly archived_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2020-01-01T14:15:00.000000+00:00"];
                        };
                        readonly archived_by: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Tag name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by tag name";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Tag name"];
                            };
                            readonly color: {
                                readonly type: "string";
                                readonly default: "#f44336";
                                readonly enum: readonly ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#faa200", "#ff9800", "#ff5722", "#795548", "#607d8b"];
                                readonly description: "`#f44336` `#e91e63` `#9c27b0` `#673ab7` `#3f51b5` `#2196f3` `#03a9f4` `#00bcd4` `#009688` `#4caf50` `#8bc34a` `#faa200` `#ff9800` `#ff5722` `#795548` `#607d8b`";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTagsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Tag name"];
                        };
                        readonly color: {
                            readonly type: "string";
                            readonly default: "#f44336";
                            readonly enum: readonly ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#faa200", "#ff9800", "#ff5722", "#795548", "#607d8b"];
                            readonly description: "`#f44336` `#e91e63` `#9c27b0` `#673ab7` `#3f51b5` `#2196f3` `#03a9f4` `#00bcd4` `#009688` `#4caf50` `#8bc34a` `#faa200` `#ff9800` `#ff5722` `#795548` `#607d8b`";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly default: 200;
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of rows returned";
                };
                readonly offset: {
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rows skipped of the result";
                };
                readonly page: {
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Select the page of the result";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly totalCount: {
                    readonly type: "integer";
                    readonly description: "Total items based on current filters";
                    readonly examples: readonly ["50"];
                };
                readonly page: {
                    readonly type: "integer";
                    readonly description: "Current page";
                    readonly examples: readonly ["1"];
                };
                readonly totalPages: {
                    readonly type: "integer";
                    readonly description: "Total pages based on current filters";
                    readonly examples: readonly ["10"];
                };
                readonly hasNext: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has next page";
                    readonly examples: readonly ["true"];
                };
                readonly hasPrevious: {
                    readonly type: "boolean";
                    readonly description: "Indicates that has previous page";
                    readonly examples: readonly ["true"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["User e-mail"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly examples: readonly ["User first name"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly examples: readonly ["User last name"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsersId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "integer";
                    readonly description: "Response status";
                    readonly examples: readonly ["200"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "uuid";
                            readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["User e-mail"];
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["User first name"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["User last name"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostContacts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Contact name"];
            };
            readonly ddi: {
                readonly type: "string";
                readonly examples: readonly ["+55"];
            };
            readonly phone: {
                readonly type: "string";
                readonly examples: readonly ["48999999999"];
            };
            readonly email: {
                readonly type: "string";
                readonly examples: readonly ["contact@email.com"];
            };
            readonly username: {
                readonly type: "string";
                readonly examples: readonly ["Instagram ID"];
            };
            readonly fields: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly properties: {
                    readonly organization: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostContactsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Contact name"];
            };
            readonly ddi: {
                readonly type: "string";
                readonly examples: readonly ["+55"];
            };
            readonly phone: {
                readonly type: "string";
                readonly examples: readonly ["48999999999"];
            };
            readonly email: {
                readonly type: "string";
                readonly examples: readonly ["contact@email.com"];
            };
            readonly username: {
                readonly type: "string";
                readonly examples: readonly ["Instagram ID"];
            };
            readonly fields: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly properties: {
                    readonly organization: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostContactsIdTags: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "string";
            readonly examples: readonly ["Tag"];
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
};
declare const PostDeals: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly origin_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Contact name"];
            };
            readonly phone: {
                readonly type: "string";
                readonly examples: readonly ["48999999999"];
            };
            readonly email: {
                readonly type: "string";
                readonly examples: readonly ["contact@email.com"];
            };
            readonly username: {
                readonly type: "string";
                readonly examples: readonly ["Instagram ID"];
            };
            readonly value: {
                readonly type: "number";
                readonly examples: readonly ["200.5"];
            };
            readonly stage: {
                readonly type: "string";
                readonly default: "BASE";
            };
            readonly user_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
            };
            readonly contact_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
            };
            readonly fields: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly properties: {
                    readonly contact: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly organization: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly required: readonly ["origin_id"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostDealsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Contact name"];
            };
            readonly phone: {
                readonly type: "string";
                readonly examples: readonly ["48999999999"];
            };
            readonly email: {
                readonly type: "string";
                readonly examples: readonly ["contact@email.com"];
            };
            readonly value: {
                readonly type: "number";
                readonly examples: readonly ["200.5"];
            };
            readonly stage: {
                readonly type: "string";
                readonly default: "BASE";
            };
            readonly status: {
                readonly type: "string";
                readonly default: "OPEN";
                readonly enum: readonly ["OPEN", "WON", "LOST"];
                readonly description: "Default: OPEN";
            };
            readonly user_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
            };
            readonly contact_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
            };
            readonly fields: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly properties: {
                    readonly contact: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly organization: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "UUID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly examples: readonly ["8feade82-d77b-4e8b-9d35-fd43e972b5c8"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostTags: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Tag name"];
            };
            readonly color: {
                readonly type: "string";
                readonly default: "#f44336";
                readonly enum: readonly ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#faa200", "#ff9800", "#ff5722", "#795548", "#607d8b"];
                readonly description: "Default: #f44336";
            };
        };
        readonly required: readonly ["name", "color"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "api-token": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "API Token";
                };
            };
            readonly required: readonly ["api-token"];
        }];
    };
};
export { DeleteContactsId, DeleteContactsIdTags, DeleteDealsId, DeleteTagsId, GetAccountFields, GetContacts, GetContactsId, GetDeals, GetDealsId, GetGroups, GetGroupsId, GetLostStatus, GetLostStatusId, GetOrigins, GetOriginsId, GetTags, GetTagsId, GetUsers, GetUsersId, PostContacts, PostContactsId, PostContactsIdTags, PostDeals, PostDealsId, PostTags };
