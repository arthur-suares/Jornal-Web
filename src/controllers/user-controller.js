const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;
    
    if(!name || !username || !email || !password || !avatar || !background)
    {
        res.status(400).send({message: "Envie todos os campos corretamente"});
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

export default create;