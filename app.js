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
});
//11
let newDoc11 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 11',
    srcDoc: newDoc10._id,
} );
newDoc11.save(function (err, newDoc11) {
if (err){
    console.log("Что-то не так с документом " + newDoc11.name);
} else {
    console.log(newDoc11.name + ' сохранен.');
}
});
//12
let newDoc12 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 12',
    srcDoc: newDoc11._id,
} );
newDoc12.save(function (err, newDoc12) {
if (err){
    console.log("Что-то не так с документом " + newDoc12.name);
} else {
    console.log(newDoc12.name + ' сохранен.');
}
});
//13
let newDoc13 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 13',
    srcDoc: newDoc12._id,
} );
newDoc13.save(function (err, newDoc13) {
if (err){
    console.log("Что-то не так с документом " + newDoc13.name);
} else {
    console.log(newDoc13.name + ' сохранен.');
}
});
//14
let newDoc14 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 14',
    srcDoc: newDoc13._id,
} );
newDoc14.save(function (err, newDoc14) {
if (err){
    console.log("Что-то не так с документом " + newDoc14.name);
} else {
    console.log(newDoc14.name + ' сохранен.');
}
});
//15
let newDoc15 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 15',
    srcDoc: newDoc14._id,
} );
newDoc15.save(function (err, newDoc15) {
if (err){
    console.log("Что-то не так с документом " + newDoc15.name);
} else {
    console.log(newDoc15.name + ' сохранен.');
}
});
//16
let newDoc16 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 16',
    srcDoc: newDoc15._id,
} );
newDoc16.save(function (err, newDoc16) {
if (err){
    console.log("Что-то не так с документом " + newDoc16.name);
} else {
    console.log(newDoc16.name + ' сохранен.');
}
});
//17
let newDoc17 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 17',
    srcDoc: newDoc16._id,
} );
newDoc17.save(function (err, newDoc17) {
if (err){
    console.log("Что-то не так с документом " + newDoc17.name);
} else {
    console.log(newDoc17.name + ' сохранен.');
}
});
//18
let newDoc18 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 18',
    srcDoc: newDoc17._id,
} );
newDoc18.save(function (err, newDoc18) {
if (err){
    console.log("Что-то не так с документом " + newDoc18.name);
} else {
    console.log(newDoc18.name + ' сохранен.');
}
});
//19
let newDoc19 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 19',
    srcDoc: newDoc18._id,
} );
newDoc19.save(function (err, newDoc19) {
if (err){
    console.log("Что-то не так с документом " + newDoc19.name);
} else {
    console.log(newDoc19.name + ' сохранен.');
}
});
//20
let newDoc20 = new Doc ( {
    _id: new mongoose.Types.ObjectId(),
    name: 'Документ № 20',
    srcDoc: newDoc19._id,
} );
newDoc20.save(function (err, newDoc20) {
if (err){
    console.log("Что-то не так с документом " + newDoc20.name);
} else {
    console.log(newDoc20.name + ' сохранен.');
}

    // Обновление первого документа
    // console.log('newDoc._id '+newDoc._id);
    let idNewDoc = newDoc._id;
    Doc.findById(idNewDoc, function(err, doc) {
        if(err) throw err;
        // console.log('newDoc10._id '+newDoc10._id);
        // console.log('res '+doc);
        doc.srcDoc = newDoc20._id;
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
        // console.log( 'docs: '+docs[ id - 1 ] );
        // console.log( {doc: docs[ id - 1 ].name} );
        // console.log('ссылка '+docs[ id - 1 ].srcDoc);
        // console.log('тип '+typeof docs[ id - 1 ].srcDoc);
        let idForSrc = docs[ id - 1 ].srcDoc;
        Doc.findById(idForSrc, function(err, docName){
            if (err) {
                console.log('Ошибка поиска');
                res.send(err);
                return;
            };
            console.log('docName'+docName);
            console.log(typeof docName);

            Doc.find({'srcDoc': docs[ id - 1 ]._id}, function(err, srcForRes){
                if (err) {
                    console.log('Ошибка поиска');
                    res.send(err);
                    return;
                };
                console.log('srcForRes '+srcForRes);
                console.log('Тип '+ typeof srcForRes);
                console.log('srcForRes.name '+srcForRes[0].name);
                res.render( 'doc.ejs', {doc: docs[ id - 1 ], src: docName, srcFor: srcForRes} );
            });
            
        });
        // res.render( 'doc.ejs', {doc: docs[ id - 1 ]} );
    });

});

app.set('port', (process.env.PORT || 80));
app.listen(app.get('port'), function() {
    console.log('Сервер запущен на порту '+app.get('port'));
});