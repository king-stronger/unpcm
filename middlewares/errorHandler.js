const errorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    res.render("error", {
        message: err.message,
        status
    })
}

export default errorHandler;