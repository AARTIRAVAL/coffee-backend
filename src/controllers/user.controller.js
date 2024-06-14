import router from "../routes/user.routes.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
 return res.status(200).json({
        message: "coffee and code"
    })
})

export {registerUser}