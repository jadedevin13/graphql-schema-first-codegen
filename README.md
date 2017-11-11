# GraphQL Schema First Codegen

This project is used to create graphql schema by merging multiple graphql files and then optionally generate Java codes

By default this project uses **graphqls** file extensions. `Use find and replace to change this`

## Managing GraphQL files

Place your graphql schema as describe in this [file](jdnc-graphql/schema/README.md)

Then on that folder. Run the following commands:

1. cd jdnc-graphql `Change current directory to jdnc-graphql`
2. yarn install `You must be in jdnc-graphql directory`
3. npm run start `You must be in jdnc-graphql directory`


## Generating Java Codes

Go to your localhost:3001 then pass an [introspection query](introspection-query.graphqls).

The introspection query can also be found in [graphql-js](https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js)

The result of the introspection query should be place in a file named **schema.json** in the jdnc-graphql-codegen.

After that, run the following commands:

1. cd jdnc-graphql-codegen `Change current directory to jdnc-graphql-codegen`
2. yarn install `You must be in jdnc-graphql-codegen`
3. npm run start `You must be in jdnc-graphql-codegen`
