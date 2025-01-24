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
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { Product } from '../entities/product.entity';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
  ): Product[] {
    const products = this.productsService.getAll();
    return products;
  }

  @Get(':productId')
  getProduct(
    @Param('productId', ParseIntPipe) productId: number,
  ): Product | null {
    const product = this.productsService.getById(productId);
    return product;
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto): Product | null {
    const product = this.productsService.create(payload);
    return product;
  }

  @Put(':productId')
  updateProduct(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ): Product | null {
    const updatedProduct = this.productsService.update(productId, payload);
    return updatedProduct;
  }

  @Delete(':productId')
  @HttpCode(HttpStatus.OK)
  deleteProduct(@Param('productId', ParseIntPipe) productId: number): boolean {
    const product = this.productsService.delete(Number(productId));
    return product;
  }
}
