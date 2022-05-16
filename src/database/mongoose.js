const mongoose = require("mongoose");

const connectionString =
	process.env.CONNECTION_STRING ||
	"mongodb+srv://admin-ario:admin@cluster0.bjf8s.mongodb.net/contact-list-dss?retryWrites=true&w=majority";

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((value) => console.log("Connected to database"))
	.catch((error) => console.log("Error connecting to database: ", error));
