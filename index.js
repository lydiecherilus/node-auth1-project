const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bcrypt = require("bcryptjs")

const usersRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")


const server = express()
const port = process.env.PORT || 4000

server.use(express.json())
server.use(helmet())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter)
server.use('/api/users', usersRouter)


//configureMiddleware(server);
// server.use("/api/users", userRouter)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

server.get('/', (req, res) => {
	res.send('<h3>auth-i-project</h3>');
});