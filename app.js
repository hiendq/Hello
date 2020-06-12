require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
var passport = require('passport');

var authRoutes = require('./src/routes/auth.route');
const City = require('./src/models/City.model')
const District = require('./src/models/District.model')
const Ward = require('./src/models/Ward.model');


const app = express();
const port = process.env.PORT || 5000;

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('DB Connected!'))
    .catch(err => {console.log('DB Connection Error: '+err.message);});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

app.get('/', async (req, res) => {
    console.log('---------')
    // await fetch('https://thongtindoanhnghiep.co/api/city/4/district', { method: 'GET'})
    // .then(res => res.json())
    // .then(json => json.map((item, index)=> {
    //     const district = new District({city: 3, code: index, title: item.Title});
    //     district.save();
    // }));
    return res.status(200).json('Done')
})

// app.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     await fetch(`https://thongtindoanhnghiep.co/api/district/${id}/ward`, { method: 'GET'})
//     .then(res => res.json())
//     .then(json => json.map((item, index)=> {
//         const ward = new Ward({city: 3 ,district: 1, code: index, title: item.Title});
//         ward.save();
//         // console.log(ward)
//     }));
//     return res.status(200).json('Done')
// })
app.get('/api/cities', async (req, res) => {
    City.find()
    .then(result => res.status(201).json(result))
})

app.get('/api/city/:id', async (req, res) => {
    const id = req.params.id;

    District.find({city: id})
    .then(result => res.status(201).json(result))
})  
app.get('/api/address/:idCity/:idDistrict/:idWard', async (req, res) => {
    let address = []
    const { idCity, idDistrict, idWard }= req.params;
    await City.find({code: idCity}).then(result => address = [...address,{city: result[0].title}])
    await District.find({code: idDistrict}).then(result => address = [...address,{district: result[0].title}])
    await Ward.find({code: idWard}).then(result => address = [...address,{ward: result[0].title}])
    return res.status(201).json(address);
}) 

app.get('/api/city/:idCity/district/:idDistrict', async (req, res) => {
    const { idCity, idDistrict}= req.params;
    console.log(idCity, idDistrict)
    Ward.find({city: idCity, district: idDistrict})
    .then(result => res.status(201).json(result))
}) 

app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });