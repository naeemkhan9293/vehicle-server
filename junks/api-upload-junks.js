// app.post('/upload', cors(), graphqlUploadExpress(), async (req, res) => {
//   try {
//     const { file } = req.body;

//     // Access the uploaded file details
//     console.log('Received file:', file);

//     // Save the file to a specific location
//     const uploadDir = path.join(__dirname, 'public', 'uploads');
//     const filePath = path.join(uploadDir, file.filename);

//     await file.createReadStream().pipe(require('fs').createWriteStream(filePath));

//     res.json({ success: true, message: 'File uploaded successfully' });
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     res.status(500).json({ success: false, message: 'File upload failed' });
//   }
// });