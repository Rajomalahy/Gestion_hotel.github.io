import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "projet_stage"
})

// statistique table
app.get('/chart/statistique', (req, res)=> {
    const sql = "SELECT * FROM reservation_table";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

// statistique salle
app.get('/chart/Statistique_salle', (req, res)=> {
    const sql = "SELECT * FROM reservation_salle";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

// statistique piscine
app.get('/chart/Statistique_piscine', (req, res)=> {
    const sql = "SELECT * FROM reservation_piscine";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

// statistique chambre
app.get('/chart/Statistique_chambre', (req, res)=> {
    const sql = "SELECT * FROM reservation_chambre";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

//visiteurAnnee
app.get('/chart/visiteurAnnee', (req, res)=> {
    const sql = "SELECT * FROM visiteur";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

//Visiteur
app.get('/chart/visiteur', (req, res)=> {
    const sql = "SELECT * FROM visiteur";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})
// statistique

// liste de commande
app.get('/liste/Commande', (req, res)=> {
    const sql = "SELECT * FROM commande";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})
// liste de commande

// liste de categorie
app.get('/categorie', (req, res)=> {
    const sql = "SELECT * FROM categorie";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

// ajout de categorie
app.post('/Categorie', (req, res) => {
    const sql = 'INSERT INTO categorie (`nom`) VALUES (?)';
    const values = [
        req.body.nom
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//modifier categorie

app.get('/categorie/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM categorie WHERE id_categorie = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({Message: "Error inside server"});
        if (result.length === 0) return res.status(404).json({Message: "Categorie not found"});
        return res.json(result[0]);
    });
});

app.put('/categorie/:id', (req, res) => {
    console.log('request body:', req.body);
    const sql = "update categorie set `nom` = ? where id_categorie = ?";
    const values = [
        req.body.nom
    ]

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//supprimer categorie
app.delete('/categorie/:id', (req, res) => {
    const sql = "DELETE FROM categorie WHERE id_categorie = ?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    }) 
})
///////////////////////////////////////////////////////////////////////

// liste des plat
app.get('/plat', (req, res)=> {
    const sql = "SELECT * FROM plat";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

//ajout plat
app.post('/Plat', (req, res) => {
    const sql = 'INSERT INTO plat (`nom_plat`,`prix_plat`,`id_categorie`) VALUES (?,?,?)';
    const values = [
        req.body.nom_plat,
        req.body.prix_plat,
        req.body.id_categorie
    ]
    db.query(sql, values, (err, data) => {
        // if(err) return res.json("error");
        // return res.json(data);
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ message: "Server error", error: err });
        }
        return res.status(201).json(data);
    })
})

//modifier plat
app.get('/plat/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM plat WHERE id_plat = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({Message: "Error inside server"});
        if (result.length === 0) return res.status(404).json({Message: "plat not found"});
        return res.json(result[0]);
    });
});

app.put('/modifierPlat/:id', (req, res) => {
    const sql = "update plat set `nom_plat` = ?, `prix_plat` = ?,`id_categorie` = ? where id_plat = ?";
    const values = [
        req.body.nom_plat,
        req.body.prix_plat,
        req.body.id_categorie
    ]

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//supprimer plat
app.delete('/plat/:id', (req, res) => {
    const sql = "DELETE FROM plat WHERE id_plat = ?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    }) 
})

//////////////////////////////////////////////////////////
// liste de table
app.get('/table', (req, res)=> {
    const sql = "SELECT * FROM table_resto";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

//ajout table
app.post('/table', (req, res) => {
    console.log('Request body:', req.body);
    const sql = "INSERT INTO table_resto (`num_table`,`desc_table`,`id_resto`) VALUES (?,?,?)";
    const values = [
        req.body.num_table,
        req.body.desc_table,
        req.body.id_resto
    ]
    db.query(sql, values, (err, data) => {
        // if(err) return res.json("error");
        // return res.json(data);
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ message: "Server error", error: err });
        }
        return res.status(201).json(data);
    })
})

//modifier table
app.get('/table/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM table_resto WHERE id_table = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({Message: "Error inside server"});
        if (result.length === 0) return res.status(404).json({Message: "table not found"});
        return res.json(result[0]);
    });
});

app.put('/modifierTable/:id', (req, res) => {
    const sql = "update table_resto set `num_table` = ?, `desc_table` = ?,`id_resto` = ? where id_table = ?";
    const values = [
        req.body.num_table,
        req.body.desc_table,
        req.body.id_resto
    ]

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//supprimer table
app.delete('/table/:id', (req, res) => {
    const sql = "DELETE FROM table_resto WHERE id_table = ?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    }) 
})








app.listen(8081, ()=> {
    console.log("Listening");
})
