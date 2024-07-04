// External dependencies
const express = require('express');

const router = express.Router();

// ePACT2 Versions
router.use('/v4', require('./views/ePACT/v4/_routes'));
// router.use('/v3', require('./views/ePACT/v3/_routes'));
// router.use('/v2', require('./views/ePACT/v2/_routes'));
// router.use('/v1', require('./views/ePACT/v1/_routes'));

// eDEN Versions
router.use('/v4', require('./views/eDEN/v4/_routes'));
// router.use('/v1', require('./views/eDEN/v1/_routes'));

// eOPS Versions
// router.use('/v1', require('./views/eOPS/v1/_routes'));


module.exports = router;
