module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mogoose) {
        return mogoose ? mogoose.toObject() : mongoose;
    }
};