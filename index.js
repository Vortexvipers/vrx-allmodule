// index.js
/**
 * Sistem exports Module Yang Kalian Perlukan
 * Bisa dipakai untuk kumpulin beberapa modul/fungsi jadi satu package.
 * Mode: CommonJS (require)
 */
const fetch = require("node-fetch");
const axios = require("axios");


// export semua
module.exports = {
  fetch,
  axios
};
