const productsList = [{
        "id": 1,
        "name": "ak-47",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHNCrtbLwDHMVKWFaDAzluXixne4-fAjIHQ&usqp=CAU",
        "price": 65,
        "stock": 9
    },
    {
        "id": 2,
        "name": "M4A4",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH7PbvCKSkfr_9Za2QsALnoHyLDW6Fa0TxA&usqp=CAU",
        "price": 12,
        "stock": 32
    },
    {
        "id": 3,
        "name": "M4A1-S",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZQOY3kwpxsCK_bHojrxwEWGPo2-tFfeE-g&usqp=CAU",
        "price": 16,
        "stock": 29
    },
    {
        "id": 4,
        "name": "M4A4",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPR8nONiT9QY8UshMvMuLU0vHIFevSAtqzQ&usqp=CAU",
        "price": 22,
        "stock": 46
    },
    {
        "id": 5,
        "name": "AUG",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5X0bQPZVxPaQ4vha4Lzdvq-5aNEpHb6z1rQ&usqp=CAU",
        "price": 8,
        "stock": 42
    },
    {
        "id": 6,
        "name": "AWP",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2h1iZlpfu5y_8-wRWscp77P0_Hp3_8vIAg&usqp=CAU",
        "price": 81,
        "stock": 15
    },
    {
        "id": 7,
        "name": "AWP",
        "model": "",
        "category": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrV-P4KBo1boHe8F6LcueJpXtAvPFePEEBfA&usqp=CAU",
        "price": 9,
        "stock": 68
    },
    {
        "id": 20,
        "name": "Desert Eagle",
        "model": "",
        "category": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws8QaQu-L1zEcDxyw77W1kdI2Dv0U8SDkGg&usqp=CAU",
        "price": 8,
        "stock": 132
    },
    {
        "id": 21,
        "name": "USP",
        "model": "",
        "category": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOREC-Hc-BF3clX58x3pZDaPDZVYgF4rkXhw&usqp=CAU",
        "price": 12,
        "stock": 95
    },
    {
        "id": 22,
        "name": "USP",
        "model": "",
        "category": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3vW7q0B5LDOsx_UWrRFt1aB8W1MZIHxWdQ&usqp=CAU",
        "price": 16,
        "stock": 65
    },
    {
        "id": 23,
        "name": "Revólver R8",
        "model": "",
        "category": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-9VNJ4bjKkVrUzz4zy3KmbiZhgP5qE8Evw&usqp=CAU",
        "price": 3,
        "stock": 168
    },
    {
        "id": 24,
        "name": "Glock",
        "model": "",
        "category": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5yBL9voUYZ7aBB87hBdmHtK8pHJJImSLtA&usqp=CAU",
        "price": 5,
        "stock": 120
    },
    {
        "id": 40,
        "name": "MP5",
        "model": "",
        "category": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKd2Xuc2GzRRCsYsEjt5FGibV1OQewqCDDRA&usqp=CAU",
        "price": 8,
        "stock": 88
    },
    {
        "id": 41,
        "name": "MP7",
        "model": "",
        "category": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQwnWdMQ6XWcRfVbfR96HLXdBN7vZ08AaKA&usqp=CAU",
        "price": 12,
        "stock": 79
    },
    {
        "id": 42,
        "name": "MAC-10",
        "model": "",
        "category": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-NZV70jQLSwYHV2wt8TfDXhjT6-epVUdPA&usqp=CAU",
        "price": 5,
        "stock": 72
    },
    {
        "id": 43,
        "name": "MP9",
        "model": "",
        "category": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQLW-xNVYIkx_PdIfDfhgbsW6_OkLMg_4pg&usqp=CAU",
        "price": 4,
        "stock": 56
    },
    {
        "id": 44,
        "name": "P90",
        "model": "",
        "category": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvg3rLTQVkwgboGAgX0mf2t16Bf2MsgYq5AQ&usqp=CAU",
        "price": 2,
        "stock": 113
    }
];

export default productsList;