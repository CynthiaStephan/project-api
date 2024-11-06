const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const app = express();

app.use(express.json());
app.use(userRoutes);


describe('GET /api/users/:id', () => )