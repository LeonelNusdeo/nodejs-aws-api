import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the SUPER-server with S3'})
})

app.post('/files', (req, res) => {
    console.log(req.files);
    res.json({ message: 'File uploaded'})
})


app.listen(3000);
console.log(`Server on port ${3000}`);
