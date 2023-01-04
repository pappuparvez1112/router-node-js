const express=require('express');

const publicRouter=express.Router();

// const log=(req,res,next)=>{
//     console.log("i am logging something!");
//     next();
// };

// publicRouter.all('*',log);
// publicRouter.get('/',(req,res)=>{
//     res.send('home');
// });
// publicRouter.get('/about',(req,res)=>{
//     res.send('about');
// });

//*****router.param

// publicRouter.param((param,option)=>(req,res,next,val)=>
//     {
//         if(val === option){
//             next();
//         }else{
//             res.sendStatus(403);
//         }
// });
// publicRouter.param('user','12');

// publicRouter.get('/:user',(req,res)=>{
//     res.send('hello user');
// });
publicRouter
    .route('/user')
    .all((req,res,next) =>{
     console.log('i am getting something');
     next();
})
    .get((req,res)=>{
        res.send('get');
    })
    .post((req,res)=>{
        res.send('post');
    })
    .put((req,res)=>{
        res.send('put');
    })
    .delete((req,res)=>{
        res.send('delete');
    })
    publicRouter.get('/',(req,res)=>{
        res.send('home');
    });
    publicRouter.get('/about',(req,res)=>{
        res.send('about');
    });


module.exports=publicRouter;