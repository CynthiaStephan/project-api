const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userModel = require('../models/userModel');

let app;
let testUser;

beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(userRoutes);
});

// user verifcation function

function expectUserProperties(user, expectedUser){
    expect(user).toHaveProperty('id');
    expect(user.name).toBe(expectedUser.name);
    expect(user.email).toBe(expectedUser.email);
    expect(user.age).toBe(expectedUser.age);
}

beforeEach(async () => {
    testUser = await userModel.create({
        name: 'test',
        email: 'test@example.com',
        age: 25,
    });
});

afterEach(async () => {
    if (testUser && testUser.id) {
        await userModel.destroy(testUser.id);
        testUser = null;
    }
});

describe('API Endpoints', () => {
    describe('POST /api/users', () => {
        it('Should add a new user', async () => {
            const newUser = {
                name: 'John Doe',
                email: 'exemple232@example.com',
                age: 30,
            };

            const response = await request(app)
                .post('/api/users')
                .send(newUser)
                .expect(201);

            // Vérifier les propriétés de l'utilisateur
            expectUserProperties(response.body, newUser);

            // Supprimer l'utilisateur ajouté pour nettoyage
            await userModel.destroy(response.body.id);
        });
    });

    describe('GET /api/users/:id', () => {
        it('Should retrieve a user by ID', async () => {
            const response = await request(app)
                .get(`/api/users/${testUser.id}`)
                .expect(200);

            expectUserProperties(response.body, testUser);
        });
    });

    describe('PUT /api/users/:id', () => {
        it('Should update an existing user', async () => {
            const updatedUser = {
                name: 'Updated Test User',
                email: 'updatedtestuser@example.com',
                age: 30,
            };

            const response = await request(app)
                .put(`/api/users/${testUser.id}`)
                .send(updatedUser)
                .expect(200);

            expect(response.body).toHaveProperty('id', String(testUser.id));
            expectUserProperties(response.body, updatedUser);
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('Should delete a user by ID', async () => {
            const response = await request(app)
                .delete(`/api/users/${testUser.id}`)
                .expect(200);

            expect(response.body).toHaveProperty('message', 'User deleted');
        });
    });
});
