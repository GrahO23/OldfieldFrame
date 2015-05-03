var express = require('express'),
    app = express(),
    // compression = require('compression'),
    unirest = require('unirest'),
    fs = require('fs'),
    passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy;

// The number of milliseconds in one day
var oneDay = 86400000;
var homeConfig = JSON.parse(fs.readFileSync('home.json', 'utf8'));

function Home(port) {
    // always initialize all instance properties
    this.port = port;
    // Serve up content from public directory

    // Serve up content from public directory
    app.use(express.static(__dirname + '/public/home', {
        maxAge: oneDay
    }));
    app.listen(port);
    console.log('Home Service started listening on port: ' + port);

    passport.use(new BasicStrategy(
        function(username, password, done) {
            console.log('username:' + username + " , password: " + password);
            User.findOne({
                username: username
            }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                if (!user.validPassword(password)) {
                    return done(null, false);
                }
                return done(null, user);
            });
        }
    ));

    app.get('/api/me',
        passport.authenticate('basic', {
            session: false
        }),
        function(req, res) {
            res.json(req.user);
        });

}

// class methods
Home.prototype.fooBar = function() {

};
// export the class
module.exports = Home;