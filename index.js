const express = require("express")
const mongoose = require("mongoose")

const app = express()


app.use(express.json())
app.use(require('./routes/Categorys.route'))
app.use(require('./routes/Comments.route'))
app.use(require('./routes/News.route'))


mongoose
  .connect(
    "mongodb+srv://fringle:12345@cluster0.wgisrd8.mongodb.net/newsWork",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3888, () => {
  console.log(`Для подключения перейдите на хост http://localhost:${3888}`);
});