'use strict';

module.exports = function (Aotexpression) {

    Aotexpression.getInterestList = function (cb) {

        Aotexpression.find({
            order: 'id DESC'
          }, function (err, list) {
            if (err) {
                console.log(err);
                return "";
            };

            cb(null, list);
        });
    };

    Aotexpression.remoteMethod('getInterestList', {
        returns: { arg: 'body', type: 'string' },
        http: { path: '/getInterestList', verb: 'get' }
    });
};
