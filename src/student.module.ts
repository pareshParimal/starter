// student.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentService } from './student.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentService],
  controllers: [AppController],
  exports: [StudentService],
})
export class StudentModule {}
