import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './users';
import bandRoutes from './bands';
import rehearsalRoutes from './rehearsals';
import venueRoutes from './venues';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/bands', bandRoutes);
router.use('/rehearsals', rehearsalRoutes);
router.use('/venues', venueRoutes);

export default router;