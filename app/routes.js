// External dependencies
const express = require('express');

const router = express.Router();

// ePACT2 Versions
router.use('/v5', require('./views/ePACT/v5/_routes'));

// eDEN Versions
router.use('/v5', require('./views/eDEN/v5/_routes'));
// router.use('/v1', require('./views/eDEN/v1/_routes'));

// eOPS Versions
// router.use('/v1', require('./views/eOPS/v1/_routes'));


module.exports = router;
