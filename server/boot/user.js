module.exports = function (app) {
    //delete app.models.User.validations.email;
    delete app.models.UserModel.validations.email;
   // app.models.MyUser.settings.emailVerificationRequired = false;
};

