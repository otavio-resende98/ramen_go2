Banco ramenGo Cloud MongoDB

https://cloud.mongodb.com/v2/665ea143c673b74f2a99bb7f#/metrics/replicaSet/665ea1b70d09f57f549722ee/explorer/ramenGo/Broths/find

endpoints:

Get Broths: http://localhost:3000/broths

Get Proteins: http://localhost:3000/proteins

Post Order: http://localhost:3000/orders

body: `
    {
    "brothId": "3",
    "proteinId": "2"
    }
`

key-api: ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf

run api:
1# cd api
2# npm install
3# npm run dev

run client:
1# cd client
2# npm install
3# npm run dev
