const passport = require("passport");
const { findUserByEmail } = require("../services/user.service");
const UserService = require('../user')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {signupService}=requier('../services/user.service.js')
passport.use(
    new GoogleStrategy({
        callbackURL:process.env.CALLBACK_URL,
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
    },
    async(accessToken,refreshToken, profile, done)=>{
        const id=profile.id;
        const email=profile.emails[0].value;
        const firstName=profile.name.givenName;
        const lastName=profile.name.familyName;
        // const profilePhoto=profile.photos[0].value;
        // const source="google";

        const currentUser=await findUserByEmail(email)
        if(!currentUser){
            const newUser=await signupService({
                id,
                email,
                firstName,
                lastName,
            })
            return done(null,newUser);
        }
        if(!currentUser.email){
         //return error
        return done(null, false, { message: `You have previously signed up with a different signin method` });
        }
    }
    )
)