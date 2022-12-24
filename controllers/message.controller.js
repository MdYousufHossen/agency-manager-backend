const { createMessageService, getMessageService } = require("../services/message.service")


exports.createMessage=async(req,res)=>{
try{
    await createMessageService(req.body)
    res.status(200).json({
        status:"success",
        message:"Message Successfully sended"
    })
}catch(error){
    res.status(500).json({
        status:"Message error",
        error
    })
}
}

exports.getMessage=async(req,res)=>{
try{
    let filters = { ...req.query };

    //sort , page , limit -> exclude
    const excludeFields = ['sort', 'page', 'limit']
    excludeFields.forEach(field => delete filters[field])

    //gt ,lt ,gte .lte
    let filtersString = JSON.stringify(filters)
    filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

    filters = JSON.parse(filtersString)



    const queries = {}

    if (req.query.sort) {
      // price,qunatity   -> 'price quantity'
      const sortBy = req.query.sort.split(',').join(' ')
      queries.sortBy = sortBy
      console.log(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      queries.fields = fields
      console.log(fields);
    }

    if (req.query.page) {

      const { page = 1, limit = 10 } = req.query;      // "3" "10"
     
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);

    }


    const conversation= await getMessageService(filters, queries)
    res.status(200).json({
        status:"success",
        data:conversation
    })
}catch(error){
    res.status(500).json({
        status:"failed",
        error
    })
}
}