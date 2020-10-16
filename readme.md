# graphql-ninja - getting familiar with React-Apollo-GraphQL-MongoDB

![](graphql-ninja.gif)

basic graphql app

app.js

- route graphql schema with express
  schema.js
- used to define object types, their relationships, and root query
  Object Types
- the "models"
- use parent as arg for nested types
  Root Query
- the landing zone of a graphql query
- fields - contain the actual query names
- resolves - contain the code to get data from db
  Mutation
- NonNull: a certain field is required, cant accept null
  Other
- GraphQLID is ID just for graphql but still string type for JS
  react-apollo
- graphql: attaches graphql queries to react components
- compose: attaching multiple grapql queries tto a react component (removed from react-apollo)
- import: as compose from "lodash.flowright"
  apollo-boost
- gql: graphql-javascript parser
  Client-side graphql
- query variables - making state as input values for client side mutation function
- refetchQueries: one way to deal with automatic re-rendering after a change made to database
- options: running a query upon prop change
