import mongoose from "mongoose";

const hoursSchema = new mongoose.Schema({
    hospatailName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    time: {
        type: Number,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: [hoursSchema]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)