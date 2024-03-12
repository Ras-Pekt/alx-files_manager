import express from 'express';
import AppController from '../controllers/AppController';
import { postNew, getMe } from '../controllers/UsersController';
import { getConnect, getDisconnect } from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

export default function Routes(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  router.post('/users', (req, res) => {
    postNew(req, res);
  });

  router.get('/connect', (req, res) => {
    getConnect(req, res);
  });

  router.get('/disconnect', (req, res) => {
    getDisconnect(req, res);
  });

  router.get('/users/me', (req, res) => {
    getMe(req, res);
  });

  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });

  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });

  router.put('/files/:id/unpublish', (req, res) => {
    FilesController.putUnpublish(req, res);
  });

  router.get('/files/:id/data', (req, res) => {
    FilesController.getFile(req, res);
  });
}
