const dbConnect = require('./mongoreadfile');

const insert = async () => {
    const collection = await dbConnect()
    const result = await collection.insertMany(
    [   {
            name: 'note-6',
            brand: 'vivo',
            price: 350,
            category: 'mobile'
        },
        {
            name: 'y-53',
            brand: 'assus',
            price: 400,
            category: 'mobile'
        },
        {
            name: 'f-11',
            brand: 'poco',
            price: 600,
            category: 'mobile'
        }
    ]
    )
    console.log(result)
}
insert();