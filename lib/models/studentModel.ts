//   /lib/models/crmModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    class: {
        type: Number            
    },
    email: {
        type: String            
    },
    phone: {
        type: String //Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});