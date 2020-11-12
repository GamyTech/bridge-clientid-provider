'use strict';


/**
 * Sign up to the gamytech bridge platform
 * Will create a new account for the bridge server
 *
 * body Body  (optional)
 * returns Account
 **/
exports.createNewAccount = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "firstname",
  "company_name" : "company_name",
  "id" : 0.8008281904610115,
  "email" : "",
  "client_id" : "client_id",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get by id
 * Get a company account by id
 *
 * id String 
 * returns Account
 **/
exports.getAccountById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "firstname",
  "company_name" : "company_name",
  "id" : 0.8008281904610115,
  "email" : "",
  "client_id" : "client_id",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

