const Type = require('../models/typeModels');
// const Images = require('../helpers/images');

let createType = (req, res) => {

  console.log(req.getData.id);
  

  if (!req.file.cloudStoragePublicUrl) {
    res.status(500).json({
      msg: 'gambar tidak ada'
    })
  }

  let newType = new Type({
    name_item: req.body.name_item,
    address: req.body.address,
    sale: req.body.sale,
    specific: {
      type: req.body.type,
      luas: req.body.luas
    },
    userId: req.getData.id,
    image: req.file.cloudStoragePublicUrl,
    location: req.body.location
  });

  newType.save()
    .then((result) => {
      res.status(200).json({
        msg: 'data Tersimpan',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let getAll = (req, res) => {
  Type.find()
    .populate('userId')
    .then((results) => {
      res.status(200).json({
        msg: 'sukses panggil data',
        data: results
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

let getDetail = (req, res) => {
  Type.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let getAllUser = (req, res) => {
  Type.find({
      userId: req.getData.id
    })
    .then((results) => {
      res.status(200).json({
        msg: 'sukses panggil data',
        data: results
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

let getDetailUser = (req, res) => {
  Type.findOne({
      _id: req.params.id,
      userId: req.getData.id
    })
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let updateType = (req, res) => {
  let updateType = {
    name_item: req.body.name_item,
    address: req.body.address,
    sale: req.body.sale,
    specific: {
      type: req.body.type,
      luas: req.body.luas
    },
    image: req.file.cloudStoragePublicUrl,
    location: req.body.location
  }
  Type.update({
      _id: req.params.id
    }, updateType)
    .then((result) => {
      res.status(200).json({
        msg: 'update sukses',
        data: result
      })
    })
    .catch(err => {
      rea.status(500).json(err);
    })
}

let updateTypeNo = (req, res) => {
  let updateType = {
    name_item: req.body.name_item,
    address: req.body.address,
    sale: req.body.sale,
    specific: {
      type: req.body.type,
      luas: req.body.luas
    },
    location: req.body.location
  }
  Type.update({
      _id: req.params.id
    }, updateType)
    .then((result) => {
      res.status(200).json({
        msg: 'update sukses',
        data: result
      })
    })
    .catch(err => {
      rea.status(500).json(err);
    })
}

let removeType = (req, res) => {
  Type.remove({
      _id: req.params.id,
      userId: req.getData.id
    })
    .then((result) => {
      res.status(200).json({
        msg: 'remove',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

module.exports = {
  createType,
  getAll,
  getDetail,
  getAllUser,
  getDetailUser,
  updateType,
  updateTypeNo,
  removeType
}
