/** Copyright (c) 2023, Calry, all rights reserved. **/

const { main } = require("../hostfully/index");

async function run() {
  // const response1 = await main('CHECK', {
  //   config: {
  //     api_key: 'MnhU6n9VC2jRTGpV',
  //     authType: 'Api Key',
  //   },
  // });

  // console.log(response1);

  // const response1 = await main('CHECK', {
  //   config: {
  //     authType: 'OAuth2',
  //   },
  // });

  // console.log(response1);

  // const response2 = await main('SPEC', {});

  // console.log(response2);

  //   const response4 = await main('REFRESH_TOKEN', {
  //   config: {
  //     refresh_token: "mXcNiYSSMPgjVscgrNL4RHtBW4IqYlNRhNjXc0IqA5FLmBZJIZ8GCZJhLWaWRHkd",
  //     client_id: "0l2gMmFokAKVLlVrtsZAIRHJpK7wVTDa",
  //     client_secret: "sR01IQb9kbe5BEdhKKuxvwSeV1Mb8NQX"
  //   }
  // });

  // console.log(response4);

  // const response3 = await main('RUN', {
  //   config: {
  //     api_key: 'MnhU6n9VC2jRTGpV',
  //     authType: 'Api Key',
  //     // authType: 'OAuth2',
  //     agencyId: '4ff0fea7-f856-4f52-b5fe-da1b3397c56c',
  //     // access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZDk1ZWI4My1iOWEzLTQzYzMtYjU5NC1jMjQ3ZTAzOTlmZGEiLCJhZmUiOiJob3N0YnVkZHlBaSIsImFjdCI6InBpIiwiaXNzIjoiaG9zdGZ1bGx5UG1wIiwic3VpZCI6IjQ1Zjc4MjkxLWI3ZWQtNDg2MC1hYTc4LWEwMTRlZWM0MTExZCIsImV4cCI6MTcxMjA4MTI3MiwiaWF0IjoxNzExOTA1ODU5fQ._AqWpnjevxXuc-PWHYg0LDumPKaclBNvf9NEylgkFfHVTUdvpggxq3ijGc9cNd52ObbBZlQ4unqgRxeRyw8y4A",
  //   },
  //   headers: {
  //     'X-HOSTFULLY-APIKEY': 'MnhU6n9VC2jRTGpV'
  //     // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZDk1ZWI4My1iOWEzLTQzYzMtYjU5NC1jMjQ3ZTAzOTlmZGEiLCJhZmUiOiJob3N0YnVkZHlBaSIsImFjdCI6InBpIiwiaXNzIjoiaG9zdGZ1bGx5UG1wIiwic3VpZCI6IjQ1Zjc4MjkxLWI3ZWQtNDg2MC1hYTc4LWEwMTRlZWM0MTExZCIsImV4cCI6MTcxMjA4MTI3MiwiaWF0IjoxNzExOTA1ODU5fQ._AqWpnjevxXuc-PWHYg0LDumPKaclBNvf9NEylgkFfHVTUdvpggxq3ijGc9cNd52ObbBZlQ4unqgRxeRyw8y4A'
  //   },
  //   path: '/reservations/54b54d0b-96cb-4a6a-9e04-290f3775737b',
  //   method: 'GET',
  //   params: {
  //     queryParams: {
  //       // limit: 2,
  //       // cursor: "eyJvZmZzZXQiOjR9",
  //       // arrivalDate: '2024-02-15',
  //       // departureDate: '2024-02-20',
  //       // startDate: '2024-02-01',
  //       // endDate: '2024-02-05',
  //       // guests: 2,
  //       // country: "India"
  //     },
  //     pathParams: {
  //       reservationId: "54b54d0b-96cb-4a6a-9e04-290f3775737b"
  //       // propertyId: '40f38122-7b94-41df-8865-a84838ea5788'
  //     },
  //     requestBody: {
  //       // conversationId: 14263858,
  //       // reservationId: 24206300,
  //       // body: 'Hello there',
  //     }
  //     // requestBody: undefined
  //   }
  // })

  // console.log(JSON.stringify(response3, null, 2));


  //   const response4 = await main('SUBSCRIBE_WEBHOOK', {
  //   config: {
  //     api_key: 'MnhU6n9VC2jRTGpV',
  //     authType: 'Api Key',
  //     agencyId: '4ff0fea7-f856-4f52-b5fe-da1b3397c56c',
  //   },
  //   headers: { 'X-HOSTFULLY-APIKEY': 'MnhU6n9VC2jRTGpV', },
  //   path: '/conversations/57eeefb8-97e7-4aa7-a296-837f5db2788e',
  //   // method: 'GET',
  //   // params: {
  //   //   queryParams: { 
  //   //     // limit: 10,
  //   //     // arrivalDate: '2024-02-15',
  //   //     // departureDate: '2024-02-20',
  //   //     // startDate: '2024-02-01',
  //   //     // endDate: '2024-02-05',
  //   //     // guests: 2,
  //   //     // country: "India"
  //   //   },
  //     pathParams: {
  //       reservationId: "57eeefb8-97e7-4aa7-a296-837f5db2788e"
  //       // propertyId: 240396
  //     },
  //   //   requestBody: {
  //   //     // conversationId: 14263858,
  //   //     // reservationId: 24206300,
  //   //     // body: 'Hello there',
  //   //   }
  //   //   // requestBody: undefined
  //   // },
  //   // listenerUrls: [
  //   //   'https://local-receiver.loca.lt/webhook/hostify/1',
  //   // ],
  // })

  // console.log(JSON.stringify(response4, null, 2));


  // const response5 = await main('DELETE_WEBHOOK', {
  //   config: {
  //     api_key: 'MnhU6n9VC2jRTGpV',
  //     authType: 'Api Key',
  //     agencyId: '4ff0fea7-f856-4f52-b5fe-da1b3397c56c',
  //   },
  //   headers: { 'X-HOSTFULLY-APIKEY': 'MnhU6n9VC2jRTGpV', },
  //   pmsWebhookIds:[
  //     "eaf46edc-be0c-482e-9a73-4556272e3dd8",
  //     "da5dbc39-9d9e-460d-abe1-4edc8da41ef1",
  //     "cf29e8cb-79d6-40c1-b905-9acdd74aaca9",
  //     "47209f73-9cda-46d0-8896-98cd1c1706da",
  //     "0306a4d6-691b-497d-8d65-984bdf16511e",
  //     "5537ee97-8290-465f-86ea-17e2f9977ad3",
  //     "a364e2b9-3fca-4f0f-abfe-62e5b8b6fa34",
  //     "221a0a3b-ef9f-424e-a862-0b654089a2c9",
  //     "34d4cb18-a203-4ca6-925d-dfe9e6c8b604",
  //     "cdb527f1-c42f-4714-bc18-2aad7d30b534",
  //     "22ef10ec-02d1-417c-aabf-54a99ea2e6f8",
  //     "7c75eddf-c439-4069-ba04-0ad5380b9936",
  //   ]
  // })

  // console.log(JSON.stringify(response5, null, 2));


// const response5 = await main('PARSE_WEBHOOK_RESPONSE', {
//     config: {
//       api_key: 'MnhU6n9VC2jRTGpV',
//       authType: 'Api Key',
//       agencyId: '4ff0fea7-f856-4f52-b5fe-da1b3397c56c',
//       // authType: 'OAuth2',
//       // agencyId: 'fd95eb83-b9a3-43c3-b594-c247e0399fda',
//       // access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZDk1ZWI4My1iOWEzLTQzYzMtYjU5NC1jMjQ3ZTAzOTlmZGEiLCJhZmUiOiJob3N0YnVkZHlBaSIsImFjdCI6InBpIiwiaXNzIjoiaG9zdGZ1bGx5UG1wIiwic3VpZCI6IjQ1Zjc4MjkxLWI3ZWQtNDg2MC1hYTc4LWEwMTRlZWM0MTExZCIsImV4cCI6MTcxMjEyODczNywiaWF0IjoxNzExOTA1ODU5fQ.LqglJHSvokpt233igSQ4_xAfFnJYPiooDpgqkDb48WE6xruzeuDEYTOAdNpOT_QDueoOJCDI0t8xn1eYaE6FrA",
//     },
//     headers: { 
//       'X-HOSTFULLY-APIKEY': "MnhU6n9VC2jRTGpV"
//       // Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZDk1ZWI4My1iOWEzLTQzYzMtYjU5NC1jMjQ3ZTAzOTlmZGEiLCJhZmUiOiJob3N0YnVkZHlBaSIsImFjdCI6InBpIiwiaXNzIjoiaG9zdGZ1bGx5UG1wIiwic3VpZCI6IjQ1Zjc4MjkxLWI3ZWQtNDg2MC1hYTc4LWEwMTRlZWM0MTExZCIsImV4cCI6MTcxMjEyODczNywiaWF0IjoxNzExOTA1ODU5fQ.LqglJHSvokpt233igSQ4_xAfFnJYPiooDpgqkDb48WE6xruzeuDEYTOAdNpOT_QDueoOJCDI0t8xn1eYaE6FrA'
//      },
//     body : {
//       integrationAccountId: 'e1ce0b40-6538-422f-b20b-3c20b19425a6',
//       integrationDefinitionKey: 'hostfully',
//       eventType: 'default',
//       payload:  {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "message_uid": "fec75423-fa24-4483-8c33-a4351bd13d04",
//   "event_type": "NEW_INBOX_MESSAGE",
//   "thread_uid": "83e0ac28-7ab9-4e2c-828d-0967853382e5"
//         // "agency_uid": "fd95eb83-b9a3-43c3-b594-c247e0399fda",
//         // "message_uid": "fec75423-fa24-4483-8c33-a4351bd13d04",
//         // "event_type": "NEW_INBOX_MESSAGE",
//         // "thread_uid": "48e8c177-edda-4755-99b4-8807d1b74925"
//       }
//     }
//   })

//   console.log(JSON.stringify(response5, null, 2));

  const response3 = await main('RUN', {
    config: {
      api_key: 'MnhU6n9VC2jRTGpV',
      authType: 'Api Key',
      agencyId: '4ff0fea7-f856-4f52-b5fe-da1b3397c56c',
    },
    headers: { 'X-HOSTFULLY-APIKEY': 'MnhU6n9VC2jRTGpV' },
    path: '/conversations',
    method: 'POST',
    params: {
      queryParams: {
        // startDate: '2024-01-31',
        // endDate: '2024-02-02',
        // guests: 3,
        // limit: 10,
        // cursor: undefined,
        // raw: false,
        // created_after: undefined,
        // created_before: undefined
      },
      pathParams: {
        // reservationId: '500128206'
        // propertyId: 500008838
      },
      requestBody: {
        conversationId: "9ca24e0f-23e8-4511-a0cb-7ef5e59324fb",
        reservationId: "57eeefb8-97e7-4aa7-a296-837f5db2788e",
        body: "Take Care",
        subject: "Lets meet"
      }
    }
  })

  console.log(JSON.stringify(response3, null, 2));

}

run();


//New booking
// {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "event_type": "NEW_BOOKING",
//   "lead_uid": "ad50e847-0fe1-40ad-bfda-dc3d75c85f1c",
//   "property_uid": "40f38122-7b94-41df-8865-a84838ea5788"
// }

// Cancel booking
// {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "event_type": "BOOKING_CANCELLED",
//   "lead_uid": "ad50e847-0fe1-40ad-bfda-dc3d75c85f1c",
//   "property_uid": "40f38122-7b94-41df-8865-a84838ea5788"
// }


// Update booking
// {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "event_type": "BOOKING_UPDATED",
//   "lead_uid": "29afb02e-38fa-4a87-a89b-699260b80495",
//   "property_uid": "40f38122-7b94-41df-8865-a84838ea5788"
// }


// new inquiry
// {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "event_type": "NEW_INQUIRY",
//   "lead_uid": "590bf2e0-af2b-4806-8a96-ce89681f7a17",
//   "property_uid": "40f38122-7b94-41df-8865-a84838ea5788"
// }

//new hold
// {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "event_type": "NEW_HOLD",
//   "lead_uid": "c47c1d8f-f694-4bd8-86e1-ee501b4ba7c6",
//   "property_uid": "40f38122-7b94-41df-8865-a84838ea5788"
// }

// new message

// {
//   "agency_uid": "4ff0fea7-f856-4f52-b5fe-da1b3397c56c",
//   "message_uid": "fec75423-fa24-4483-8c33-a4351bd13d04",
//   "event_type": "NEW_INBOX_MESSAGE",
//   "thread_uid": "15c849e5-f1c0-44aa-b1fd-e277f530efe1"
// }