import AWS from 'aws-sdk';
import { useState } from 'react';

const imgUpload = (file: any, imgurl: string): void => {
  const access_key = process.env.ACCESS_ID;
  const secret_key = process.env.ACCESS_SECRET;
  const resion = 'ap-northeast-2';
  const Bucket = 'projectsor';
  const files = file;
  AWS.config.update({
    accessKeyId: 'AKIAYLHCCXYHFWWZKOWJ',
    secretAccessKey: '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',
  });

  //   const myBucket = new AWS.S3({
  //     params: {
  //       Bucket: { Bucket },
  //       Region: resion,
  //     },
  //   });

  const [progress, setProgress] = useState('');
  const [selectFile, setSelectFile] = useState('');

  const handleFileInput = (e:any) => {
    setSelectFile(e.target.files[0]);
  };

  const uploadFile = (files: any) => {
    const params = {
      ACL: 'public-read',
      Body: files,
      Bucket: Bucket,
      Key: files.name,
    };
    const s3 = new AWS.S3();
    s3.putObject(params)
      .on('httpUploadProgress', (evt :any) => {
      })
      .send((err: Error) => {
        if (err) console.log(err);
      });
  };
  files ? uploadFile(files) : null;
};

export { imgUpload };
