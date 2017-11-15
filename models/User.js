const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Should the username and password be in this schema?
  firstName: { type: String, 
    required: true 
  },
  lastName: { type: String, 
  required: true 
  },
  linkedinId: { type: String, 
  required: true 
  },
  profileURL: { type: String, 
  required: true 
  },
  picture: { type: String, 
  required: true 
  },
  email: { type: String, 
  required: true 
  },
  eventURL: { type: String, 
    required: true 
  },
  savedGuests: { type: Array, 
    required: true 
  },
  hostedEventHistory: { type: Array, 
    required: true 
  },
  attendedEventHistory: { type: Array, 
    required: true 
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
