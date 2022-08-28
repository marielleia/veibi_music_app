import request,{Response} from 'supertest';
import app from '../src/app';
import {describe, beforeAll, test, expect} from '@jest/globals';


describe('testing api',()=>{
    let response:Response;
    describe('testing route "/"',()=>{
        beforeAll(async ()=>{
            response = await request(app)
            .get('/');
        })
        test('should return code 200 and content-type "application/json"',async ()=>{


        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    })
        test('should return "Hello, this is VEIBI."', async ()=>{
            expect(response.body).toBe("Hello, this is VEIBI.")
        })
})
})