const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/v1/sessions', SessionController.store)

routes.get('/v1/spots', SpotController.index)
routes.post('/v1/spots', upload.single('thumbnail'), SpotController.store)

routes.get('/v1/dashboard', DashboardController.show);

routes.post('/v1/spots/:spot_id/bookings', BookingController.store);

routes.post('/v1/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/v1/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;