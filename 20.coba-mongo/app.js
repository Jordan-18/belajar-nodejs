const {MongoClient} = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'wpu';
var ObjectId = require('mongodb').ObjectID;

const client = new MongoClient(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

client.connect((error, client) =>{
    if(error){
        return console.log('Koneksi Gagal');
    }

    // pilih database
    const db = client.db(dbname);

    //Menambahkan 1 Data ke collection Mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama : "Yusuf",
    //         email: "yusuf@gmail.com"  
    //     },
    //     (error, result) => {
    //         if(error){
    //             console.log("Gagal Menambahkan Data")
    //         }

    //         console.log(result)
    //     }
    // )


    // menambahkan lebih dari 1 data *insertMany
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama:'Akhsanuw',
    //             email:'akhsanuw@gmail.com'
    //         },
    //         {
    //             nama:'Abied',
    //             email:'abied@gmail.com'
    //         },
    //         {
    //             nama:'cacing',
    //             email:'cacing@gmail.com'
    //         },
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('Data Gagal Ditambahkan')
    //         }

    //          console.log(result)
    //     }
    // )

    // menampilkan semua data yang ada di collection 'mahasiswa'
        // db
        // .collection('mahasiswa')
        // .find({_id: ObjectId("629e073c0d5fc63af015a689")})
        // .toArray((error, result) => {
        //     console.log(result);
        // })

    // mengubah data berdasarkan ID
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectId('629e073c0d5fc63af015a689')
    //     },
    //     {
    //         $set : {
    //             email: "Dehliyan@gmail.com",
    //         },
    //     }
    // )

    // updatePromise
    // .then((result) => {
    //     console.log(result); 
    // })
    // .catch((error) => {
    //     console.log(error);
    // })

    // Mengubah data lebih dari 1, berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama : 'yusuf'
    //     },
    //     {
    //         $set: {
    //             nama: 'yusuf ciyus'
    //         }
    //     }
    // )

    // menghapus 1 data
    // db
    // .collection('mahasiswa').deleteOne(
    //     {
    //         _id:ObjectId('629e073c0d5fc63af015a689')
    //     })
    // .then((result) => {
    //     console.log(result)
    // })
    // .catch((error) => {
    //     console.log(error)
    // }) 

    // menghapus lebih dari 1 data
    db
    .collection('mahasiswa').deleteMany(
        {
            nama:'yusuf ciyus'
        })
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    }) 
})