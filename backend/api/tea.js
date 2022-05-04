const router = require('express').Router();
const Tea = require('../db/models/Tea');

router.get('/', async (request, response, next) => {
  try {
    const tea = await Tea.findAll();
    response.json(tea);
  } catch (error) {
    console.error('No tea found')
  }
})
