import { Router } from 'express';
import * as AuthorsController from '../controllers/authors.controller';

const router = Router();

router.get('/', AuthorsController.getAllAuthors);
router.get('/:id', AuthorsController.getAuthorById);
router.post('/', AuthorsController.createAuthor);
router.put('/:id', AuthorsController.updateAuthor);
router.delete('/:id', AuthorsController.deleteAuthor);

export default router;
