const express = require('express');
const router = express.Router();

// Ruta raíz
router.get('/', (req, res) => {
  res.send('¡Hola, mundo! Esta es mi API desde las rutas principales.');
});

module.exports = router;