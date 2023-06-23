const multer =require("multer");
const path =require("path")

const storage=multer.diskStorage({
    destination:"images/",
    filename:(req,file,cb)=>{
    const uniqueSuffix=Date.now()+"-"+Math.random(Math.random()*1E9)
    cb(null, file.filename+"-"+uniqueSuffix)
    }
})
const uploader= multer({
    storage:"images/",
    fileFilter:(req,file,cb)=>{
        const supportedImage=/png|jpg/;
        const extension= path.extname(file.originalname)
        if(supportedImage.test(extension)){
            cb(null,true)
        }else{
            cb(new Error("Must be a png/jpg image"));
        }
    },
    limits:{
        fileSize:5000000,
    }
})

module.exports=uploader;