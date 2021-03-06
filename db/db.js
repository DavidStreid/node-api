const mongoose = require('mongoose');
const state = {
  db: null
};

exports.connect = function(url, done) {
  if (state.db) return done();

  console.log(`Creating mongo connection at ${url}`);
  mongoose.connect(url, function(err, db) {
    if (err) return done(err);

    console.log("Connection success!");

    state.db = db;
    done();
  })
};

exports.get = function() {
  return state.db;
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
};
