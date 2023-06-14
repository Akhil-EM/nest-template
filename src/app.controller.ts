import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { responseModel } from './helpers/response.helper';

@ApiTags('root')
@Controller()
export class AppController {
  @ApiOperation({ summary: 'base url of application.' })
  @Get()
  getHello() {
    return responseModel('application up and running.');
  }
}
