import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv"
import ilumaAPISchemas from "../schema/ilumaAPISchema.js"

const ajv = new Ajv()
const validate = ajv.compile(ilumaAPISchemas)


describe("Testing POST", () => {
    const baseUrl = "https://api.iluma.ai"

    it("POST - Account Name", async () => {
        const response = await fetch(`${baseUrl}/v2.2/identity/bank_account_data_requests`, {
            method: "POST",
            headers: {
                "Authorization": "Basic aWx1bWFfZGV2ZWxvcG1lbnRfRlg0ZjBNNXN4RGdrNXFGeVpuazYwWmVuZ0FmQTlvMzF4M2VjZDI5dmloamM0Vmh5SjhGY2xaaEhqanc6",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "bank_account_number": "1234567890",
                "bank_code": "ID_BCA",
                "given_name": "FIRA DIYANKA",
                "surname": "FEBRIYANTI",
                "reference_id": "foo123"
            })
        })
        expect(response.status).to.equal(200)

        const data = await response.json()
        // console.log(data)
        const isValid = validate(data)
        expect(isValid, 'Pasti bisa').to.be.true
    })
});

describe("Testing GET", () => {
    const baseUrl = "https://api.iluma.ai"

    it("GET - Account Name", async () => {
        const response = await fetch(`${baseUrl}/v2.2/identity/bank_account_data_requests/bknv_6a3147df6540322bbff0a37f`, {
            method: "GET",
            headers: {
                "Authorization": "Basic aWx1bWFfZGV2ZWxvcG1lbnRfRlg0ZjBNNXN4RGdrNXFGeVpuazYwWmVuZ0FmQTlvMzF4M2VjZDI5dmloamM0Vmh5SjhGY2xaaEhqanc6"
            }
        })
        expect(response.status).to.equal(200)

        const data = await response.json()
        // console.log(data)
        const isValid = validate(data)
        expect(isValid, 'Pasti bisa').to.be.true
    })
});