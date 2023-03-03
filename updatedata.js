const dbConnect = require('./mongoreadfile');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 's-11' }, {
        $set: { name: 's-123' }
    }
    );
    console.log(result);
}
updateData();