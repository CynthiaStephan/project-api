const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const app = express();

app.use(express.json());
app.use(userRoutes);


describe('GET /api/users/:id', () => {
    it('Should get on user', async () => {
        const userId = 13; 
        
        const response = await request(app)
            .get(`/api/users/${userId}`)
            .expect(200)
        
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(userData.name);
            expect(response.body.email).toBe(userData.email);
            expect(response.body.age).toBe(userData.age);

    });
});