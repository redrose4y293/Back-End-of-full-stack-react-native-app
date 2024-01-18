const registerController = (req, resp) => {
    try {
        const [name, email, password] = req.body
        if (!name) {
            return resp.status(400).send({
                success: false,
                message: "name is required"
            })
        }
        if (!email) {
            return resp.status(400).send({
                success: false,
                message: "Email is requied"
            })
        }
        if (!password) {
            return resp.status(400).send({
                success: false,
                message: "Password filed is Empaty"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = { registerController }