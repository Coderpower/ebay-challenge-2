var expect = require('expect.js');
var Product = require('../sources/Product');

var carpet;
var laptop;
var watch;

suite('Building a Product', function(){
    test("Testing the average price with one product", function(){
        carpet = new Product("Carpet", 200);
        expect(Product.averagePrice()).to.be(200);
    });

    test("Testing the average price after modifying price property", function(){
        carpet.price = 1000;
        expect(Product.averagePrice()).to.be(1000)
    });

    test('Testing the average price with three products', function(){
        laptop = new Product("Laptop", 2000)
        watch = new Product("Watch", 600)
        expect(Product.averagePrice()).to.be(1200);
    });

    test("Testing the average price after modifying price property", function(){
        carpet.price = 100;
        laptop.price = 2000;
        watch.price = 300
        expect(Product.averagePrice()).to.be(800);
    });
});
