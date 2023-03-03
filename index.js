const dbConnect = require('./mongoreadfile')

//promice no used kari ne .then//

// dbConnect().then((response) => {
//     response.find({}).toArray().then((data) => {
//         console.log(data);
//     });
// })

const main= async ()=>{
    let data = await dbConnect();
    result = await data.find().toArray();
    console.log(result);
}
main();