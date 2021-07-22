const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const router = express.Router()
const pool = require('./pool');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/parshos", (req, res, next) => {
    pool.query("SELECT * FROM parshos",
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500),
                    console.log(error);
            }
            return res.status(200).json(
                results
            );
        });
});

router.get("/vorts", (req, res, next) => {
    pool.query("SELECT * FROM dvar_torahs",
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500),
                console.log(error);
            }
            return res.status(200).json(
                results
                // ,console.log("bodddy", results),
                
            );
        });
});
module.exports = router;
app.listen(8080);
app.use('/', router);
