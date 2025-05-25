import messageModel from "../models/message.model.js";

class MessageService {
  async get() {
    const result = await messageModel.find();
    return result;
  }

  async getOne(id) {
    const result = await messageModel.findOne({
      _id: id
    });

    return result;
  }

  async delete(id, data) {
    const result = await messageModel.deleteOne({
      _id: id,
    });
    return result;
  }

  async create(data) {
    const result = await messageModel.create(
      data,
    );
    return result;
  }

  async update(id, data) {
    const result = await messageModel.updateOne(
      {
        _id: id,
      },
      data
    );
    return result;
  }
}

export default new MessageService();
