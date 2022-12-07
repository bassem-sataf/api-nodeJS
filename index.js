var express = require('express');
const app = express();
const UsersRouter = require('./Routers/UserRouter');

app.use('/users', UsersRouter);

app.listen(3000);

// app.post('/user/', (req,res)=> {

// })

// app.post('/login/', (req,res)=> {
    
// })

// app.get('/users/', (req,res)=> {
    
// })

// app.get('/groupes/', (req,res)=> {
    
// })

// app.get('/users/groupes/', (req,res)=> {
    
// })

// app.get('/user-details/id', (req,res)=> {
    
// })

// app.post('/user/groupe/id', (req,res)=> {
    
// })

// app.patch('/user/id', (req,res)=> {
    
// })



// //ajouter un groupe
// app.post('/groupe/', (req,res)=> {
    
// })

// //supprimer un groupe
// app.post('/user-groupe/id', (req,res)=> {
    
// })

// //modifier un groupe
// app.patch('/groupe/id', (req,res)=> {
    
// })

