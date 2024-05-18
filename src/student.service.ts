// student.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './student.schema';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

  
  getHello(): string {
    return 'Hello World!';
  }

  async createStudent(createStudentDto: any): Promise<Student> {
    const createdStudent = new this.studentModel(createStudentDto);
    var student=createdStudent.save();
    return student;
  }

  // Define your service methods here
  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}
