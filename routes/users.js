var express = require('express');
var router = express.Router();

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} userId User id.
 * @apiSuccess {String} userName User Name.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userId": "1dac",
 *       "userName": "Name"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  if (id !== '1dac') {
    return res.status(404).send({
      "error": "UserNotFound"
    })
  } else {
    return res.send({
      userId: id,
      userName: 'Name' + id
    });
  }
});

module.exports = router;
