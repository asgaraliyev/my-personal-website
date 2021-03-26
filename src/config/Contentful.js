import * as contentful from "contentful";
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "bhu82qj1jijk",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "FtpalCrLfBnwqLb3h_31o18y_KYVefiA9gx0fLIN7Co",
});
export default client;
