import express from 'express';
import { genres } from './genresData';
import uniqid from 'uniqid';


const router = express.Router(); 



router.get('/', (req, res) => {
    app.use(express.json());
    res.json(genres);
});

// Get genre details
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (genreDetails.id == id) {
        res.status(200).json(genreDetails);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;