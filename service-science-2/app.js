const feathers = require('@feathersjs/feathers');
// It is a Feathers app inside an Express app so it can be exposed
const express = require('@feathersjs/express');
const app = express(feathers());

// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());


// Our calculator service with some functions!
// Call it with a number and get a decision whether it is a prime or not.
app.use('isPrime', {
  get(number) {
    const isNumberPrime = number => {
        for(let n = 2, s = Math.sqrt(number); n <= s; n++)
            if(number % n === 0) return false; 
        return number !== 1;
    }
    return Promise.resolve({
      number,
      result: isNumberPrime(number)
    });
  }
});

// Call it with two numbers (a,b) and get back (a^b) 
app.use('power', {
  find(pair) {
    return Promise.resolve({
      result: Math.pow(pair.query.a, pair.query.b)
    });
  }
});

async function checkSomePrimes() {
  for(let i = 2; i <= 100; i++) {
    console.log(await app.service('isPrime').get(i));
  }
}

async function thePowersOfTwo() {
  for(let i = 0; i <= 32; i++) {
    console.log(await app.service('power').get({
      a: 2,
      b: i
    }));
  }
}

//checkSomePrimes();
//thePowersOfTwo();

app.listen(3031).on('listening', () => console.log('Feathers calculator application started on localhost:3031! ' +
                                                   'Make your usual GET requests with parameters in the URL.'));