class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went worng",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.error = error

        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.statusCode)
        }
    }
}


export {ApiError}