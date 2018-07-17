const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );


let DocSchema = new mongoose.Schema( {
    // id: { type: Number, default: 0 },
    srcDoc: { type: mongoose.Schema.Types.ObjectId, ref: 'docs' },
    name: { type: String, default: 'Имя документа' },
} );

let Doc = mongoose.model("Doc", DocSchema);



app.get('/create', function(req, res) {
    mongoose.connect('mongodb://adminuser:admin123@ds139251.mlab.com:39251/testbase');
    
//0  
    let newDoc = new Doc ( {
        _id: new mongoose.Types.ObjectId(),
        name: 'Документ начальный',
        srcDoc: new mongoose.Types.ObjectId(),
    } );

    newDoc.save(function (err, newDoc) {
        if (err){
            console.log("Что-то не так с документом " + newDoc.name);
        }else{
            console.log(newDoc.name + ' сохранен.')
        }
    });
//1
    let newDoc1 = new Doc ( {
        _id: new mongoose.Types.ObjectId(),
        name: 'Документ № 1',
        srcDoc: newDoc._id,
    } );
    newDoc1.save(function (err, newDoc1) {
    if (err){
        console.log("Что-то не так с документом " + newDoc1.name);
    }else{
        console.log(newDoc1.name + ' сохранен.')
    }
});
//2
let newDoc2 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 2',
    srcDoc: newDoc1._id,
} );
newDoc2.save(function (err, newDoc2) {
if (err){
    console.log("Что-то не так с документом " + newDoc2.name);
} else {
    console.log(newDoc2.name + ' сохранен.');
}
});

//3
let newDoc3 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 3',
    srcDoc: newDoc2._id,
} );
newDoc3.save(function (err, newDoc3) {
if (err){
    console.log("Что-то не так с документом " + newDoc3.name);
} else {
    console.log(newDoc3.name + ' сохранен.');
}
});

//4
let newDoc4 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 4',
    srcDoc: newDoc3._id,
} );
newDoc4.save(function (err, newDoc4) {
if (err){
    console.log("Что-то не так с документом " + newDoc4.name);
} else {
    console.log(newDoc4.name + ' сохранен.');
}
});

//5
let newDoc5 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 5',
    srcDoc: newDoc4._id,
} );
newDoc5.save(function (err, newDoc5) {
if (err){
    console.log("Что-то не так с документом " + newDoc5.name);
} else {
    console.log(newDoc5.name + ' сохранен.');
}
});

//6
let newDoc6 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 6',
    srcDoc: newDoc5._id,
} );
newDoc6.save(function (err, newDoc6) {
if (err){
    console.log("Что-то не так с документом " + newDoc6.name);
} else {
    console.log(newDoc6.name + ' сохранен.');
}
});

//7
let newDoc7 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 7',
    srcDoc: newDoc6._id,
} );
newDoc7.save(function (err, newDoc7) {
if (err){
    console.log("Что-то не так с документом " + newDoc7.name);
} else {
    console.log(newDoc7.name + ' сохранен.');
}
});

//8
let newDoc8 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 8',
    srcDoc: newDoc7._id,
} );
newDoc8.save(function (err, newDoc8) {
if (err){
    console.log("Что-то не так с документом " + newDoc8.name);
} else {
    console.log(newDoc8.name + ' сохранен.');
}
});

//9
let newDoc9 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 9',
    srcDoc: newDoc8._id,
} );
newDoc9.save(function (err, newDoc9) {
if (err){
    console.log("Что-то не так с документом " + newDoc9.name);
} else {
    console.log(newDoc9.name + ' сохранен.');
}
});

//10
let newDoc10 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 10',
    srcDoc: newDoc9._id,
} );
newDoc10.save(function (err, newDoc10) {
if (err){
    console.log("Что-то не так с документом " + newDoc10.name);
} else {
    console.log(newDoc10.name + ' сохранен.');
}
// Обновление первого документа
// console.log('newDoc._id '+newDoc._id);
let idNewDoc = newDoc._id;
Doc.findById(idNewDoc, function(err, doc) {
    if(err) throw err;
    // console.log('newDoc10._id '+newDoc10._id);
    // console.log('res '+doc);
    doc.srcDoc = newDoc10._id;
    doc.save(function(err, res){
        if (err) throw err;
        console.log('Начальный документ перезаписан');
    });
});
});



    res.send(newDoc.name + newDoc1.name + newDoc2.name + newDoc3.name + newDoc4.name + newDoc5.name + newDoc6.name + newDoc7.name + newDoc8.name + newDoc9.name + newDoc10.name + ' сохранен.');
} );


app.get('/', function(req, res) {
    mongoose.connect('mongodb://adminuser:admin123@ds139251.mlab.com:39251/testbase');
    let Doc = mongoose.model("Doc", DocSchema);
  
    Doc.find(function (err, docs) {
        console.log('Количество документов в коллекции: ' + docs.length); //Количество документов
        console.log('Тип данных: ' + typeof docs);

        console.log('Имена: ' + docs);
        let bom = Object.keys(docs);
        console.log(bom);
        // let docParse = JSON.parse(docs);
        // console.log('Тип данных: ' + typeof  docParse);
        // console.log('Имя: ' + docParse.name);
        res.render('index.ejs', {docs: docs});
    });

    // Doc.find({ srcDoc: /^Al/ }, function(err, docs) {

    // });
});

app.get('/doc/:id', function(req, res){
    
    mongoose.connect('mongodb://adminuser:admin123@ds139251.mlab.com:39251/testbase');
    let Doc = mongoose.model("Doc", DocSchema);
    
    Doc.find(function (err, docs) {
        if (err) throw err;
        let id = req.params.id;
        // console.log( req.params.id );
        // console.log( req.params );
        console.log( 'docs: '+docs[ id - 1 ] );
        console.log( {doc: docs[ id - 1 ].name} );
        console.log('ссылка '+docs[ id - 1 ].srcDoc);
        console.log('тип '+typeof docs[ id - 1 ].srcDoc);
        let idForSrc = docs[ id - 1 ].srcDoc;
        Doc.findById(idForSrc, function(err, docName){
            if (err) throw err;
            console.log('docName'+docName);
            console.log(typeof docName);
            res.render( 'doc.ejs', {doc: docs[ id - 1 ], src: docName} );
        });
        // res.render( 'doc.ejs', {doc: docs[ id - 1 ]} );
    });

});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Сервер запущен на порту '+app.get('port'));
});