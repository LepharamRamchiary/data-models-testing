import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    doctors: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    patients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    hospitals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)