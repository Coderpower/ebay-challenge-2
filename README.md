# Average Price
You must build a `Product` class that takes two arguments, a name (String) and a price (Number).  

If the name or the price is not valid, the constructor must throw an error.

You must also create a class method called `averagePrice()` that returns the average price of all instantiated Products.  

If the property price of an instantiated Product is changed, the `averagePrice()` function must return an updated value.

>**Example :**

```javascript
var laptop = new Product('laptop', 2500);
Product.averagePrice(); // must return 2500

var watch = new Product('watch', 500);
Product.averagePrice(); // must return 1500

watch.price = 100;
Product.averagePrice(); // must return 1300

var something = new Product(null, new Date()) // should throw an error.
```
