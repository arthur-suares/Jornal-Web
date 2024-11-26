import createUserService from "../services/user-service.js"

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;
    
    if(!name || !username || !email || !password || !avatar || !background)
    {
        res.status(400).send({message: "Envie todos os campos corretamente"});
    }

    const user = await createUserService(req.body);

    if(!user)
    {
        return res.status(400).send({message: "Erro ao criar o usuario"});
    }

    res.status(201).send({
        message: "Usuario criado com sucesso!",
        user: {
            name,
            username,
            email,
            avatar,
            background,

        },
    });
};

const findAll = async (req, res) => {
    const users = user
}

export {create, findAll};