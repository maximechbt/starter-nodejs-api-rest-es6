import chai, { expect } from 'chai';
import server from '../index';
import ProductModule from '../modules/products'

let mongoServer;

chai.use(require('chai-http'));

let Product = ProductModule.Model;

const should = chai.should();

describe('Products', () => {

    describe('/GET product', () => {
        it('it should GET all the products', (done) => {
            chai.request(server)
                .get('/products')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.success).to.equal(true);
                    expect(res.body.data.length).to.equal(0);
                    done();
                });
        });
    });

    describe('/POST product', () => {
        it('it should failed because title is not defined', (done) => {
            const product = {
                description: "test"
            };
            chai.request(server)
                .post('/products')
                .send(product)
                .end((err, res) => {
                    expect(res.status).to.equal(422);
                    expect(res.body.success).to.equal(false);
                    done();
                });
        });
    });

    describe('/POST product', () => {
        it('it should create a product', (done) => {
            const product = {
                description: "test",
                title: "test",
            };
            chai.request(server)
                .post('/products')
                .send(product)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.success).to.equal(true);
                    expect(res.body.data.title).to.equal(product.title);
                    expect(res.body.data.description).to.equal(product.description);
                    done();
                });
        });
    });

});
