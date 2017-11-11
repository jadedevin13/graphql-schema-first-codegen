This is where you put your graphql files. You can create folders to seperate types, queries and mutations.

Keep in mind that you must have one `type Query` and one `type Mutation`.

If you need to have multiple `type Query` you can use `extend type Query`.

This project uses graphql-tools to merge the graphql files into one.

By default this project uses **graphqls** file extensions.  `Use find and replace to change this`

See [graphql-tools](https://www.apollographql.com/docs/graphql-tools/index.html) for more info.
