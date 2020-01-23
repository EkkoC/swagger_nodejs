var express = require("express");
//const { query } = require("../Database/mysql/mysql");
var router = express.Router();
// Routes
/**
 * @swagger
 * /customers:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/customers", (req, res) => {
    res.status(200).send("Customer results");
  });
  
  /**
   * @swagger
   * /novice_task:
   *    post:
   *      description: 新手任務
   *    parameters:
   *      - name: uuid
   *        in: body
   *        description: 流水號
   *        required: ture
   *        schema:
   *          type: string
   *          format: string
   *    responses:
   *      '201':
   *        description: Successfully created user
   */
  router.post("/novice_task", (req, res) => {

   
  
    res.status(200).send("Successfully updated customer");
  });


  module.exports = router;