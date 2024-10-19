// Import Stytch as a CommonJS module

// const stytch = require('stytch');
// OR as an ES6 module
import * as stytch from 'stytch';

// Initialize the Stytch client using environment variables
//Test1
// Check that environment variables are defined
const project_id = process.env.STYTCH_PROJECT_ID;
const secret = process.env.STYTCH_SECRET;

console.log('Stytch Project ID:', process.env.STYTCH_PROJECT_ID);
console.log('Stytch Secret:', process.env.STYTCH_SECRET);

if (!project_id || !secret) {
  throw new Error("Stytch environment variables are not defined.");
}

const client = new stytch.Client({
  project_id: 'project-test-3c756139-08aa-47c6-883b-ef6c660cb7bd', // This is now guaranteed to be a string
  secret: 'secret-test-EJYUoEn9iwpM41uZ2ByhnAnonezSloMiCKA=',         // This is now guaranteed to be a string
});


// Export the client to be used in other parts of the app
export default client;