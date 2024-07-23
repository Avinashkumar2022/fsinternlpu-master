const mongoose = require("mongoose");

const appliedOpportunitySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    profile_name: {
        type: String,
        required: true
    },
    stipend: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    }
});

const AppliedOpportunity = mongoose.model("AppliedOpportunity", appliedOpportunitySchema);

module.exports = AppliedOpportunity;