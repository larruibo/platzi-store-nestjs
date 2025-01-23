import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): object {
    return {
      message: `Category ${categoryId} Product ${productId}`,
      categoryId,
      productId,
    };
  }
}
