const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    const errorObj = { 
        status: 500,
        message:'Server Error',
        err: err.message
    };
    res.status(500).send(errorObj.message);
}

module.exports = errorHandlerMiddleware;