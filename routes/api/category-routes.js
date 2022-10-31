const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findOne } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categoriesFindAll
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {findOne
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new categoryCreate
});

router.put('/:id', (req, res) => {
  // update a category by its `id` valueUPdate
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` valueDestroy
});

module.exports = router;
