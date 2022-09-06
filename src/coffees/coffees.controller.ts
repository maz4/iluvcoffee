import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this action returns all coffees. Limit: ${limit}, offset ${offset}`;
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return `this action returns #${id} coffees`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body) {
    return `this actions updates #${id} coffee`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `this actions removes #${id} coffee`;
  }
}
