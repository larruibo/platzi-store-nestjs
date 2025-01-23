import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 20, @Query('offset') offset = 0): object {
    const products = this.productsService.getAll();
    return {
      message: `Products ${limit} ${offset}`,
      limit,
      offset,
      products,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): object {
    const product = this.productsService.getById(Number(productId));
    return {
      message: `Product ${productId}`,
      product,
    };
  }

  @Post()
  createProduct(@Body() payload: any): object {
    return {
      message: 'Product created',
      payload,
    };
  }

  @Put(':productId')
  updateProduct(
    @Param('productId') productId: string,
    @Body() payload: any,
  ): object {
    return {
      message: 'Product updated',
      productId,
      payload,
    };
  }

  @Delete(':productId')
  @HttpCode(HttpStatus.REQUEST_TIMEOUT)
  deleteProduct(@Param('productId') productId: string): object {
    return {
      message: 'Product deleted',
      productId,
    };
  }
}
