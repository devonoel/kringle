# Kringle

Let's make some Christmas donations!

## Installation

Clone the repo:
```
$ git clone https://github.com/DevoNoel/kringle.git
```

Make sure you have [npm](https://www.npmjs.org/) installed, then:

```
$ npm install
$ bower install
```

## Usage

Create a ```.env``` file in the root directory:
```
DATABASE_URL=<url to your mongo db>
STRIPE_SECRET=<stripe secret key>
```

Start the server:
```
$ foreman start
```
Then go to ```localhost:5000``` in your browser

## Testing

Tests are written in Mocha.  To run all tests:
```
$ npm test
```
