const collegeModel = require('../models/collegeModel')
const internModel = require('../models/InternModel')
const { isValidRequestBody, isValidName, } = require("../validator/validator")

//createCollege-api
  const createCollege = async (req, res) => {
      try {
      let reqBody = req.body
      const { name, fullName, logoLink } = req.body
      // ----------------collage name and fullName validation-----------------------
      if (!isValidRequestBody(reqBody)) return res.status(400).send({ status: false, message: "Collage data is require" })
      if (!name) return res.status(400).send({ status: false, message: "name is required" })
      if (!isValidName(name.toLowerCase().trim())) return res.status(400).send({ status: false, message: "name is invalide" })

      const clgName=await collegeModel.findOne({name})
      if(clgName) return res.status(400).send({statuts:false,message:"college name already exist"})

      if (!fullName) return res.status(400).send({ status: false, message: "fullName is require" })
    
      if (!logoLink) return res.status(400).send({ status: false, message: "loginlink is require" })

      const collegedata = await collegeModel.create(reqBody)

      return res.status(201).send({ status: true, data: collegedata })
      }
      catch (err) {
      return res.status(500).send({ error: err.message })
      }

}

//get-api =>fetch college and interns data 
  const getcollegeDetails = async function(req,res){
      try{
      const name=req.query.name
      if(!name) return res.status(400).send({statuts:false,message:"name is require"})
      const collageData=await collegeModel.findOne({name})
      if(!collageData) return res.status(404).send({statuts:false,message:"collegename is not exist"})

      const interns=await internModel.find({collegeId:collageData._id, isDeleted:false}).select(({name:1,email:1,mobile:1}))

      const data={
      name:collageData.name,
      fullName:collageData.fullName,
      logoLink:collageData.logoLink,
      interns:interns
        }
      return res.status(200).send({statuts:true,data:data})
      }catch(err){
      return res.status(500).send({ error: err.message })  
      }

}

module.exports = { createCollege ,getcollegeDetails}