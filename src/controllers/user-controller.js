const soma = (req, res) => {
    const soma = 41 + 1;
    res.status(200).send({soma: soma});
}

export default soma;