const express=require('express');

const publicRouter=express.Router();

const log=(req,res,next)=>{
    console.log("i am logging something!");
    next();
};

publicRouter.all('*',log);

publicRouter.get('/',(req,res)=>{
    res.send('home');
});
publicRouter.get('/about',(req,res)=>{
    res.send('about');
});

module.exports=publicRouter;