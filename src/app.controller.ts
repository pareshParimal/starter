import { Controller, Get, Post, Body,Delete,Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller("student")
export class AppController {
  constructor(private readonly appService: StudentService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("xyz")
  getHello2(): string {
    return "this.appService.getHello()";
  }

  @Post("/paresh")// Use the @Post decorator for POST requests
  createStudent(@Body() data: any): string { // Use @Body decorator to extract data from the request body
    // Process the data here, you can access it via the 'data' parameter
    // For example, you can save it to a database or perform any other operation
   var  student=this.appService.createStudent(data);
    return `saved data: ${JSON.stringify(student)}`; // Return a response
  }
  
  @Post("/paresh/:id")// Use the @Post decorator for POST requests
  createParesh2(@Body() data:any, @Param('id') id: string): string { // Use @Body decorator to extract data from the request body
    // Process the data here, you can access it via the 'data' parameter
    // For example, you can save it to a database or perform any other operation
    return `Received id: @${id} data: ${JSON.stringify(data)}`; // Return a response
  }


  @Delete('delete/:id')
  deleteById(@Param('id') id: string): string {
    // Implement the logic to delete data with the specified ID
    return `Deleted item with ID ${id}`;
  }  

}
