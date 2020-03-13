const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
const dbConfig = require("./database/dbConfig")

const usersRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(helmet())
server.use(cors())
server.use(session({
	name: 'token', 
	secret: 'keep it secret, keep it safe', 
	cookie: {
		maxAge: 1000 * 20,
		secure: false, 
		httpOnly: true,
	},
	store: new KnexSessionStore({
		knex: dbConfig,
		createtable: true,
	}),
	resave: false,
	saveUninitialized: true,
}))

server.use("/api/auth", authRouter)
server.use('/api/users', usersRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.get('/', (req, res) => {
	res.send('<h3>auth-i-project</h3>');
});

const port = process.env.PORT || 4000
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})