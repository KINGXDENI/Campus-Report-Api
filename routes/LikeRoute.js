import express from 'express';
import { addLike, deleteLike, getLikesByReportId } from '../controllers/LikeController.js';

const router = express.Router();

// Definisikan rute untuk menambahkan like
router.post('/reports/:id/like', addLike);
router.get('/reports/:id/like', getLikesByReportId);
router.delete('/reports/:id/like', deleteLike);

export default router;