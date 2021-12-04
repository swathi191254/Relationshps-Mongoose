const express = require("express");

const Section = require("../models/section.model");

const router = express.Router();

router.post("",async(req,res)=>{
    try {
        const section = await Section.create(req.body);

        return res.status(201).spend(section);
    }catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

router.get("",async(req,res)=>{
    try{
        const section = await Section.find().lean().exec();

        return res.send(section);
    } catch(e){
        return res.status(500).json({message:e.message, status:"Failed"});
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const section = await Section.findById(req.params.id).lean().exec();

        return res.send(section);

    } catch(e){
        return res.status(500).json({message:e.message, status:"Failed"});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const section = await Author.findByIdAndDelete(req.params.id, req.body, {
            new:true,
        }).lean().exec();

        return res.send(section);
    } catch(e){
        return res.status(500).json({meassage: e.message, status:"Failed"});
    }
});

router.delete("/:id", async(req,res) => {
    try {
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(section);

    } catch(e){
        return res.status(500).json({meassage: e.message, status:"Failed"});
    }
});

module.exports = router;