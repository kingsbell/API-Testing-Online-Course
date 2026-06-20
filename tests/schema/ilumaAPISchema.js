const ilumaAPISchema = {
    type: "object",
    properties: {
        bank_account_number: { type: "string" },
        bank_code: { type: "string" },
        status: { type: "string" },
        reference_id: { type: "string" },
        created: { type: "string" },
        updated: { type: "string" },
        id: { type: "string" }
    },
    required: ['bank_account_number', 'bank_code', 'status', 'reference_id', 'created', 'updated', 'id']
}

export default ilumaAPISchema