import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Player } from './Player';

// StartHandScore Logic
const VERSION = "SHS Logic";

const app = express();
const player = new Player();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', ({}, res) => res.send(200, 'OK'));

app.post('/', (req, res) => {
    if (req.body.action === 'bet_request') {
        console.log(req.body.game_state);
        player.betRequest(JSON.parse(req.body.game_state))
            .then(bet => {
                res.status(200).send(bet.toString());
                console.log("✅", {bet})
            })
            .catch((error) => {
                console.log("❌", {error})
                res.status(200).send("999999");
            });

    } else if (req.body.action === 'showdown') {
        player.showdown(JSON.parse(req.body.game_state));
        res.status(200).send('OK');
    } else if (req.body.action === 'version') {
        res.status(200).send(VERSION);
    } else {
        res.status(200).send('OK');
    }
});

const port = parseInt(process.env['PORT'] || "1337");
const host = "0.0.0.0";
app.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
