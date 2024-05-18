import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student.module';
import { StudentService } from './student.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://pareshparimal:Lnrve0t3U0zJWtfO@pareshcluster0.2sb7tmv.mongodb.net/?retryWrites=true&w=majority&appName=PareshCluster0'),
    StudentModule
    
  ],
  controllers: [AppController],
  providers: [StudentService],
})
export class AppModule {}



