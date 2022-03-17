// CRUD Creare Read Update Delete

// const mongodb=require('mongodb');
// const MongoClient =mongodb.MongoClient;
// const ObjectId=mongodb.ObjectID;
const {MongoClient,ObjectId}=require('mongodb');

const connectionUrl='mongodb://127.0.0.1:27017';
const databaseName='task-manager';

const id=new ObjectId();
// console.log(id.getTimestamp());
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(connectionUrl,{useNewUrlParser :true},(error,client)=>{
    if(error){
    return console.log('Unable to connect to Database');
    }
    // console.log('Successfully Connected');

    const db=client.db(databaseName);
    // db.collection('users').insertOne({
    //     _id : id,
    //     name : 'Vikram',
    //     age : 26
    // },(error,result)=>{
    //     if(error){
    //        return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name :'Jen',
    //         age :28
    //     },
    //     {
    //         name :'Gunther',
    //         age : 27
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert Documents');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Clean the House',
    //         completed :true
    //     },
    //     {
    //         description : 'Renew Inspection',
    //         completed :false
    //     },
    //     {
    //         description : 'Pot Plants',
    //         completed :true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks');
    //     }
    //     console.log(result.ops);
    // })

//     db.collection('users').findOne({_id :new ObjectId("60d8ba7f4c98ff34c4725fb2")},(error,user)=>{
//         if(error){
//             return console.log('Unable to Fetch');
//         }
//         console.log(user);
//     })
//

// db.collection('users').find({age : 27}).toArray((error,users)=>{
//     console.log(users);
// });
// db.collection('users').find({age : 27}).count((error,count)=>{
//     console.log(count);
// })

// db.collection('tasks').find({_id :new ObjectId("60d89b9f7a46770a5cd2b567")}).toArray((error,users)=>{
//     console.log(users);
// });
// db.collection('tasks').find({completed : false}).toArray((error,count)=>{
//     console.log(count);
// })


// const updatePromise=db.collection('users').updateOne({
//     _id:new ObjectId("60d899b347bb3717b4862a1f")
// },{
//     $inc :{
//         age:1,
//     }
// })

// updatePromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })



// db.collection('users').updateOne({
//         _id:new ObjectId("60d899b347bb3717b4862a1f")
//     },{
//         $inc:{
//             age:1,
//         }
//     }).then((result)=>{
//         console.log(result);
//     }).catch((error)=>{
//         console.log(error);
//     })


    // db.collection('tasks').updateMany({
    //     completed :false
    // },{
    //     $set:{
    //         completed :true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount);
    // }).catch((error)=>{
    //     console.log(error);
    //         })

    // db.collection('users').deleteMany({
    //     age :27
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    
    db.collection('tasks').deleteOne({
        description : 'Clean the House'
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
        
});