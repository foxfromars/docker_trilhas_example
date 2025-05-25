import express from "express";
import messageService from "../services/message.service.js";

class MessageController {
  /**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
  async get(req, res) {
    try {
      const result = await messageService.get();
      res.send(result);
    }
    catch (err) {
      res.statusCode = 500
      res.send(err);
    }
  }

  /**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
  async getOne(req, res) {
    try {
      const result = await messageService.getOne(req?.params?.id)
      res.send(result);
    }
    catch (err) {
      res.statusCode = 500
      res.send(err);
    }
  }

  /**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
  async delete(req, res) {
    try {
      const result = await messageService.delete(req?.params?.id)
      res.send(result);
    }
    catch (err) {
      res.statusCode = 500
      res.send(err);
    }
  }

  /**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
  async create(req, res) {
    try {
      const data = req.body;
      const result = await messageService.create(data);
      res.send(result);
    }
    catch (err) {
      res.statusCode = 500
      res.send(err);
    }
  }

  /**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
  async update(req, res) {
    try {
      const data = req.body;
      const id = req?.params?.id
      const result = await messageService.create(id, data);
      res.send(result);
    }
    catch (err) {
      res.statusCode = 500
      res.send(err);
    }
  }
}

export default new MessageController();
