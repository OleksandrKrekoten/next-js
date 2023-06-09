const mongoose = require("mongoose");

const updatePhotos = async () => {
  try {
    // Підключення до бази даних MongoDB
    await mongoose.connect(
      "mongodb+srv://admin:y8P62MDU8xBKVACr@shopdb.mrzu7a8.mongodb.net/shopdb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Підключено до бази даних");

    // Оновлення об'єктів в колекції
    console.log("Початок оновлення об'єктів...");

    await mongoose.models.laptops.updateMany(
      {},
      {
        $regexFindAndReplace: {
          input: "$photo",
          find: "jpg",
          replacement: "webp",
          options: "i",
          path: "photo",
        },
      }
    );

    console.log("Об'єкти оновлено успішно");
    mongoose.connection.close();
  } catch (err) {
    console.error("Помилка при оновленні об'єктів:", err);
    mongoose.connection.close();
  }
};

module.exports = updatePhotos;
