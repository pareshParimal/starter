// student.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
