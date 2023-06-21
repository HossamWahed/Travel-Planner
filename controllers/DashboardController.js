const { MongoClient } = require('mongodb');
const booking = require('../models/booking.model')
const AppError = require('../utils/appError');
catchAsync = require('../utils/catchAsync');

exports.numOfBooking = async function getCount() {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
  
    const db = client.db('Travel_Planner');
    const collection = db.collection('booking');
  
    const count = await collection.countDocuments();
    console.log('Number of IDs:', count);
  
    await client.close();
  }
  
//   getCount().catch(console.error);