import mongoose from '../mongoose';

const CategorySchema = mongoose.Schema({
    name: {
        type: String
    }
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
