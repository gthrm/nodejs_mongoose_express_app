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
    
//1  
    let newDoc = new Doc ( {
        _id: new mongoose.Types.ObjectId(),
        name: 'Документ начальный',
    } );

    newDoc.save(function (err, newDoc) {
        if (err){
            console.log("Что-то не так с документом " + newDoc.name);
        }else{
            console.log(newDoc.name + ' сохранен.')
        }
    });
//2
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
//3
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

    res.send(newDoc.name + newDoc1.name + newDoc2.name + ' сохранен.');
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
        // console.log( docs[ id - 1 ] );
        // console.log( {doc: docs[ id - 1 ].name} );
        console.log(docs[ id - 1 ].srcDoc);
        console.log(typeof docs[ id - 1 ].srcDoc);
        let idForSrc = docs[ id - 1 ].srcDoc;
        Doc.findById(idForSrc, function(err, docName){
            if (err) throw err;
            console.log(docName);
        });
        res.render( 'doc.ejs', {doc: docs[ id - 1 ]} );
    });

});

app.set('port', (process.env.PORT || 80));
app.listen(app.get('port'), function() {
    console.log('Сервер запущен на порту '+app.get('port'));
});