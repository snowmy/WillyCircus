const express = require('express');
const app = express();
const port = 3010;
const connection = require('./conf');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));



// En tant qu'utilisateur, je veux pouvoir créer un nouveau spectacle.

app.post('/spectacles', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO spectacles SET ?', formData, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde des spectacles");
        }
        else {
            res.sendStatus(200);
        }
    });
});

// En tant qu'utilisateur, je veux pouvoir consulter un spectacle en renseignant son id dans l'url.

app.get('/spectacles/:id', (req, res) => {
    const spectaclesId = req.params.id;
    const formData = req.body;
    connection.query('SELECT * FROM spectacles WHERE id = ?', [spectaclesId, formData], (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'id des spectacles");
        }
        else {
            res.json(results);
        }
    });
});


// En tant qu'utilisateur, je veux pouvoir lister tous les spectacles.

app.get('/spectacles', (req, res) => {
    connection.query('SELECT * FROM spectacles', (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération des spectacles");
        }
        else {
            res.json(results);
        }
    });
});

// En tant qu'utilisateur, je veux pouvoir supprimer un spectacle.

app.delete('/spectacles/:id', (req, res) => {
    const spectaclesId = req.params.id;
    const formData = req.body;
    connection.query('DELETE FROM spectacles WHERE id = ?', [spectaclesId, formData], (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'id des spectacles");
        }
        else {
            res.json(results);
        }
    });
});

// En tant qu'utilisateur, je veux pouvoir modifier un spectacle.

app.put('/spectacles/:id', (req, res) => {
    const spectaclesId = req.params.id;
    const formData = req.body;

    connection.query('UPDATE spectacles SET ? WHERE id = ?', [formData, spectaclesId], err => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la modification des spectacles");
        }
        else {
            res.sendStatus(200);
        }
    });
});

// En tant qu'utilisateur je veux supprimer un spectacle.

app.delete('/spectacles/:id', (req, res) => {
    const spectaclesId = req.params.id;
    const formData = req.body;
    connection.query('DELETE SpectaclesId FROM spectacles WHERE id = ?', [spectaclesId, formData], (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'id des spectacles");
        }
        else {
            res.json(results);
        }
    });
});


// En tant qu'utilisateur, je veux pouvoir créer un nouvel artiste.

app.post('/artistes', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO artistes SET ?', formData, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde des artistes");
        }
        else {
            res.sendStatus(200);
        }
    });
});

// En tant qu'utilisateur, je veux pouvoir consulter un artiste en renseignant son id dans l'url.

app.get('/artistes/:id', (req, res) => {
    const artistesId = req.params.id;
    const formData = req.body;
    connection.query('SELECT * FROM artistes WHERE id = ?', [artistesId, formData], (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'id des artistes");
        }
        else {
            res.json(results);
        }
    });
});


// En tant qu'utilisateur, je veux pouvoir lister tous les artistes.

app.get('/artistes', (req, res) => {
    connection.query('SELECT * FROM artistes', (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération des artistes");
        }
        else {
            res.json(results);
        }
    });
});

// En tant qu'utilisateur, je veux pouvoir supprimer un artiste.

app.delete('/artistes/:id', (req, res) => {
    const artistesId = req.params.id;
    const formData = req.body;
    connection.query('DELETE FROM artistes WHERE id = ?', [artistesId, formData], (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'id des artistes");
        }
        else {
            res.json(results);
        }
    });
});

// En tant qu'utilisateur, je veux pouvoir modifier un artiste.

app.put('/spectacles/:id', (req, res) => {
    const artistesId = req.params.id;
    const formData = req.body;

    connection.query('UPDATE artistes SET ? WHERE id = ?', [formData, artistesId], err => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la modification des artistes");
        }
        else {
            res.sendStatus(200);
        }
    });
});

// En tant qu'utilisateur je veux supprimer un artiste.

app.delete('/artistes/:id', (req, res) => {
    const artistesId = req.params.id;
    const formData = req.body;
    connection.query('DELETE ArtistesId FROM artistes WHERE id = ?', [artistesId, formData], (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'id de l'artiste");
        }
        else {
            res.json(results);
        }
    });
});


app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    console.log(`Server is listening on ${port}`);
});