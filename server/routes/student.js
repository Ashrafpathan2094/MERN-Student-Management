import express from 'express';
import { getStudents, createStudent, deleteStudent ,updateStudent} from '../controllers/student.js';

const router = express.Router();

router.post('/getstudentdetail',getStudents);
router.post('/',createStudent);
router.delete('/:id',deleteStudent);
router.put('/:id',updateStudent);

export default router;