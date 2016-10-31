'use strict';

import _ from 'lodash';
import Employee from './employee.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}


function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


// Gets a list of Employees
export function index(req, res) {
  return Employee.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Employee in the DB
export function create(req, res) {
  return Employee.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Gets a single Thing from the DB
export function show(req, res) {
  return Employee.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Employee in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Employee.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
