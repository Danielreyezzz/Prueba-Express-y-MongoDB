"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: Number,
  nombre: String,
  tipo: String,
  descripcion: String,
});

const Pokemon = mongoose.model("pokemon", pokemonSchema, "Pokemon");

module.exports = Pokemon;
