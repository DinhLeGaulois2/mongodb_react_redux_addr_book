import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        let obj = [
            {
                name: "name1",
                company: "company1",
                title: "title1"
            },
            {
                name: "name2",
                company: "company2",
                title: "title2"
            },
            {
                name: "name3",
                company: "company3",
                title: "title3"
            }
        ]

        let phone = {
            type: "Home",
            number: "408-258-1234",
            contactId: "5ad67a9c8e329f19b461dc17"
        }
        return (dispatch) => {
            axios.get("/api/get/contacts")
                .then(data => {
                    console.log("Result: " + JSON.stringify(data, null, 5))
                }).catch(err => console.log(JSON.stringify(err, null, 5)))

            // axios.get("/api/get/students")
            //     .then(data => {
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //     })
        }
    }
}

export default testAction