import multer from "multer";
import multerS3 from 'multer-s3';
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

export const s3Uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function(req,file,cb){
            if(!file){
                return cb(new Error('No File Found'));
            }

            console.log(file);
            if(file.mimetype!=='image/jpeg' && file.mimetype!=='image/png'){
                return cb(new Error('Invalid File Type'));
            }

            const fileExtension = file.originalname.split('.')[1];

            //if everything is good proceed with the upload
            cb(null, Date.now().toString()+"."+fileExtension);
        }
    })
});