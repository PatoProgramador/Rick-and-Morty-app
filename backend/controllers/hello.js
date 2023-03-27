const helloworld = (req, res, next) => {
    return res.status(200).json({
        message: "Holis desde la ruta x"
    });
};

module.exports =  helloworld; 