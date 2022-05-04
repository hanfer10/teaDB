const router = require('express').Router();

router.use('/tea', require('./tea'));

router.use((req, res, next) => {
  let error = new Error('Api route not found');
  error.status = 404;
  next(error);
});

module.exports = router;
