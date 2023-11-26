import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  public default() {
    return 'Privet';
  }

  @Get('/list')
  public list() {
    return ['Privet', 'Poka', 'Vova'];
  }

  @Get('/object')
  public obj() {
    return {
      name: 'Nikolay',
      age: 20,
    };
  }

  @Post('/object')
  public createObject(@Body() body) {
    console.log(body);

    return {
      name: body.name,
      age: body.age,
      time: new Date(),
    };
  }
}
