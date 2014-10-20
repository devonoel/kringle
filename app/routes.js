var Donation = require('./models/donation');
var Wish = require('./models/wish');

module.exports = function(app) {
  // api =================================================

  // Donations ===========================================
  app.get('/api/donations', function(req, res) {
    Donation.find(function(err, donations) {
      if (err)
        res.send(err);

      res.json(donations);
    });
  });

  app.post('/api/donations', function(req, res) {
    Donation.create({
      amount : req.body.amount
    }, function(err, donation) {
      if (err)
        res.send(err);

      Donation.find(function(err, donations) {
        if (err)
          res.send(err);

        res.json(donations);
      });
    });
  });

  // Wishes ==============================================
  app.get('/api/wishes', function(req, res) {
    Wish.find(function(err, wishes) {
      if (err)
        res.send(err);

      res.json(wishes);
    });
  });

  app.post('/api/wishes', function(req, res) {
    Wish.create({
      text : req.body.text
    }, function(err, wish) {
      if (err)
        res.send(err);

      Wish.find(function(err, wishes) {
        if (err)
          res.send(err);

        res.json(wishes);
      });
    });
  });

  // root ================================================
  app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
