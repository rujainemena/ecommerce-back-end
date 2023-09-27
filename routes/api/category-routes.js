const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// endpoint: http://localhost:3001/api/categories
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// endpoint: http://localhost:3001/api/categories/1 specific category id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const id = req.params.id
    const categoryData = await Category.findByPk(id, {
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});
// CRUD, POST = CREATE; req.body is data given by client via the input boxes on the website.
// endpoint: http://localhost:3001/api/categories/
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// CRUD, put is update; in sequelize syntax is update
// endpoint: http://localhost:3001/api/categories/1
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// endpoint: http://localhost:3001/api/categories/1 
// DELETE  = destroy in sequelize
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
