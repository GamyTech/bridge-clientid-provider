/* eslint-disable no-unused-vars */
const Service = require('./Service');
const db = require('../models/index')
const { v1: uuidv1 } = require('uuid');

/**
* Sign up to the gamytech bridge platform
* Will create a new account for the bridge server
*
* body Body  (optional)
* returns Account
* */
const createNewAccount = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      const account = await db.Account.create({
        firstName: body.firstname,
        lastName: body.lastname,
        companyName: body.company_name,
        email: body.email,
        clientId: uuidv1(),
        websocketUrl: body.websocket_url,
      })
      resolve(Service.successResponse(account));
    } catch (e) {
      error = e.original.sqlMessage
      reject(Service.rejectResponse(error || e.message || 'Invalid input', 400 || e.status || 405));
    }
  },
);
/**
* Get by id
* Get a company account by id
*
* id String 
* returns Account
* */
const getAccountById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      const account = await db.Account.findOne({ where: { clientId: id } })
      resolve(Service.successResponse(account))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createNewAccount,
  getAccountById,
};
