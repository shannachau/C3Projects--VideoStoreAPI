var request = require('supertest'),
assert = require('assert'),
app = require('../../app'),
sqlite3 = require('sqlite3').verbose(),
agent = request.agent(app);

describe("Endpoints for /rentals", function() {
  beforeEach(function(done){
    var db_cleaner = new sqlite3.Database('db/test.db');
    db_cleaner.serialize(function() {
      db_cleaner.exec(
        " BEGIN; \
        DELETE FROM movies; \
        INSERT INTO movies(title, overview, release_date, total_inventory, inventory_available) \
        VALUES('Jaws', 'scary shark', '1984', 5, 3 ), \
              ('Psycho', 'scary dude', '1960', 10, 9 ), \
              ('Carrie', 'scary chick', '1970', 7, 1), \
              ('Cujo', 'scary dog', '1987', 2, 0), \
              ('Christine', 'scary car', '1982', 4, 2 ); \
        DELETE FROM customers; \
        INSERT INTO customers(name, registered_at, address, city, state, postal_zip, phone_number, credit)\
        VALUES('Alice', 'Fri, 18 Aug 2015 07:00:00 -0700', '123 Fake St.', 'Seattle', 'WA', '98102', '123-444-5555', 10.14),\
              ('Shanna', 'Fri, 18 Aug 2015 07:00:00 -0700', '123 Fake St.', 'Seattle', 'WA', '98102', '123-444-5555', 20.16),\
              ('Marleigh', 'Fri, 18 Aug 2015 07:00:00 -0700', '123 Fake St.', 'Seattle', 'WA', '98102', '123-444-5555', 8.53),\
              ('Joe', 'Fri, 18 Aug 2015 07:00:00 -0700', '123 Fake St.', 'Seattle', 'WA', '98102', '123-444-5555', 92.42),\
              ('Steve', 'Fri, 18 Aug 2015 07:00:00 -0700', '123 Fake St.', 'Seattle', 'WA', '98102', '123-444-5555', 2.34);\
        DELETE FROM rentals; \
        INSERT INTO rentals(customer_id, movie_id, return_date, checkout_date, due_date) \
        VALUES(1, 2, 'Fri, 18 Aug 2015 07:00:00 -0700', 'Wed, 14 Aug 2015 10:00:00 -0700', 'Wed, 21 Aug 2015 10:00:00 -0700'), \
              (1, 2, '', 'Wed, 22 Jul 2015 10:00:00 -0700', 'Wed, 29 Jul 2015 10:00:00 -0700'), \
              (2, 2, '', 'Tue, 7 Sep 2015 10:00:00 -0700', 'Tue, 14 Sep 2015 10:00:00 -0700'), \
              (2, 5, 'Tue, 7 Sep 2015 10:00:00 -0700', 'Tue, 1 Sep 2015 10:00:00 -0700', 'Tue, 8 Sep 2015 10:00:00 -0700'), \
              (3, 1, '', 'Fri, 18 Sep 2015 10:00:00 -0700', 'Fri, 25 Sep 2015 10:00:00 -0700'); \
        COMMIT;",
          function(err) {
            db_cleaner.close();
            done();
          };
      );
    });
  });


  // '/rentals/:title/current/:sort_option'
  describe('GET /rentals/:title/current/:sort_option', function(){
    var request;

    beforeEach(function(done) {
      request = agent.get('/rentals/psycho/current/customer_id').set('Accept', 'application/json');
      done();
    })

    it('responds with json', function(done){

    });

    it('returns an array of rental objects', function(done){

    });

    it('returns an array of rental objects sorted by customer id', function(done){

    });

    it('returns an array of rental objects sorted by customer name', function(done){

    });


    it('returns an array of rental objects sorted by checkout date', function(done){

    });
  });



  // '/rentals/:title/past/:sort_option'
  describe('GET /rentals/:title/past/:sort_option', function(){
    it('responds with json', function(done){

    });

    it('returns an array of rental objects', function(done){

    });

    it('returns an array of rental objects sorted by id, name checkout date', function(done){

    });

    it('returns an array of rental objects sorted by name', function(done){

    });

    it('returns an array of rental objects sorted by checkout date', function(done){

    });
  });


  // '/rentals/overdue'
  // *GET*  rental/:title/available
  // *POST* rental/:title/:customer_id/checkin
  // *POST* rental/:title/:customer_id/checkout







});
