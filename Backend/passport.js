const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport');
const User = require('./models/userSchema');
let email = '';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, callback) {
            email = profile.emails[0].value;
            // console.log(email);
            User.findOne({ googleId: profile.id }, (err, user) => {
                if (!user) {
                    User.create({
                        googleId: profile.id,
                        email: profile.emails[0].value
                    });
                }
            });
            callback(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports.getUserEmail = function () {
    return new Promise((resolve, reject) => {
        if (email) {
            resolve(email);
        }
    });
};