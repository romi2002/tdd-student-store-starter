class ExpressError extends Error {
    constructor(message, status) {
        super();

        this.message = message
        this.status = status
    }
}

class BadRequestError extends ExpressError {
    constructor() {
        super("Bad Request", 400)
    }
}

class NotFoundError extends ExpressError {
    constructor(){
        super("Not found", 404)
    }
}

module.exports = {ExpressError, BadRequestError, NotFoundError}