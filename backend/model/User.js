import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({ 
  username: { 
    type: String,
    required : true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength:10
  },
  email: { 
    type: String,
    required: true, 
    unique: true,
    trim: true,
    match: /.+\@.+\..+/
  },
  password: { 
    type: String,
    required: true,
    minlength: 6
  }
},{ timestamps: true })

const User = mongoose.model('User', userSchema);

export { User };
