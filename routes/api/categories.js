import express from 'express';
import Categories from '../../db/models/categories'

let router = express.Router();

router.get('/', (req, res, next)=> {
    Categories.distinct('name').then((doc) =>{
        res.json(doc);
    },(e)=>{
        res.send(e)
    });
});


export default router;