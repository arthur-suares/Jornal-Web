import User from "../models/User.js";

const createUserService = (body) => User.create(body);

export default createUserService;