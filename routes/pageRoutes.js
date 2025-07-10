import express from 'express';
import {loadHomepage, loadArchivePage, loadGalleryPage, loadMenuPage, loadLocationPage, loadReservationPage,loadNewsPage, loadStaffPage} from '../controllers/pageControllers.js'

//initialize router
const router = express.Router();

router.get('/', loadHomepage)
router.get('/archive', loadArchivePage)
router.get('/gallery', loadGalleryPage)
router.get('/location', loadLocationPage)
router.get('/menu', loadMenuPage)
router.get('/news', loadNewsPage)
router.get('/reservation', loadReservationPage)
router.get('/staff', loadStaffPage)


export default router;