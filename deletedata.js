const dbConnect = require('./mongoreadfile');

const deleteData = async () => {
    let data = await dbConnect();
    let result =await data.deleteOne({name:'y-53'})

    console.log(result);
}
deleteData();