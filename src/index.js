const app=require('./app');

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log('Server is up on PORT '+port);
})


// const  multer=require('multer');
// const upload=multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'));
//         }
//         cb(undefined,true);
//     }
// })
// const errorMiddleware=(req,res,next)=>{
//     throw new Error('From my middleware');
// }
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send();
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message});
// })

// Practice Middleware

// app.use((req,res,next)=>{
//     // console.log(req.method,req.path);
//     // next();
//     if(req.method==='GET'){
//         res.send('Get requests are disabled');
//     }
//     else{
//         next();
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down.Check back soon');
// })






// const bcrypt=require('bcryptjs');

// const myFunction=async()=>{
//     const password='Red12345';
//     const hashedPassword=await bcrypt.hash(password,8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch=await bcrypt.compare('Red12345',hashedPassword);
//     console.log(isMatch);
// }

// myFunction();

// const jwt=require('jsonwebtoken');
// const MyFunction=async()=>{
//     const token=jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn : '7 days'});
//     console.log(token);

//     const data=jwt.verify(token,'thisismynewcourse');
//     console.log(data);
// }
// MyFunction();

// const pet={
//     name :'hal',
// }
// pet.toJSON=function(){
//     // console.log(this);
//     // return this;
//     return {};
// }
// console.log(JSON.stringify(pet));

// const User=require('./models/user.js');
// const Task=require('./models/task.js');

// const main=async()=>{
//     // const task=await Task.findById('60dab2680858a906908835ea');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);
//     const user=await User.findById('60dab1650b64bc2db01671a5');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();