// import connectDb from '../../components/Auth/ConnectDb'
import connectDb from '../../components/Connection/MongoOps'

class ProductService {
  constructor() {
    this.connectDb = new ConnectDb();
    this.db = null;
  }

  async initialize() {
    try {
      this.db = await this.connectDb.connect();
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }

  async findNextProductId() {
    const db = await connectToMongoDB();
    const result = await db.collection('Products').find().sort({ productId: -1 }).limit(1).toArray();
    closeMongoDBConnection();

    if (result.length === 0) {
      return 1;
    }

    return result[0].productId + 1;
  }

  async findProductById(productId) {
    const db = await connectToMongoDB();
    const result = await db.collection('Products').findOne({ productId });
    closeMongoDBConnection();
    return result;
  }

  async findProductByName(productName) {
    const db = await connectToMongoDB();
    const result = await db.collection('Products').findOne({ name: productName });
    closeMongoDBConnection();
    return result;
  }

  async listAllProducts(page, pageSize) {
    const db = await connectToMongoDB();
    const result = await db
      .collection('Products')
      .find()
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();
    closeMongoDBConnection();
    return result;
  }


  async saveProduct2(productData) {
    const db = await connectToMongoDB();
    await db.collection('Products').insertOne(productData);
    closeMongoDBConnection();
  }

  async saveProduct(product) {
    try {
      if (!this.db) {
        throw new Error('MongoDB not connected. Call initialize() first.');
      }

      // Check for duplicate product based on all fields
      const existingProduct = await this.db.collection('Products').findOne(product);
      if (existingProduct) {
        console.log('Duplicate product. Not saving.');
        return;
      }

      // Save the product to the database
      await this.db.collection('products').insertOne(product);
      console.log('Product saved successfully:', product);
    } catch (error) {
      console.error('Error saving product:', error.message);
    }
  }
}

export default ProductService;
