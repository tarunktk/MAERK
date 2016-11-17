'use strict';

import mongoose from 'mongoose';

var reportSchema = new mongoose.Schema({

{ year: {
  type : Number,
  required: true
},
   January: [reportSchema],
   February: [reportSchema],
   March: [reportSchema],
   April: [employeeSchema],
   May: [employeeSchema],
   June: [employeeSchema],
   July: [employeeSchema],
   August: [employeeSchema],
   September: [employeeSchema],
   October: [employeeSchema],
   November: [employeeSchema],
   December: [employeeSchema]
    }

});

export default mongoose.model('employee', employeeSchema);
