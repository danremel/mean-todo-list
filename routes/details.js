const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('details', ['tasks']);