const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;
    const checkEmailExists = await knex("users").where({ email }).first();
    if (checkEmailExists) {
      throw new AppError("E-mail encontra-se em uso");
    }
    await knex("users").insert({
      name,
      email,
      password: password,
    });
    return response.json({
      message: "Usuário cadastrado com sucesso",
    });
  }
}

module.exports = UsersController;
