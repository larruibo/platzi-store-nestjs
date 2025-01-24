import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 3;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
    },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | null {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(product);
    return product;
  }

  update(id: number, payload: UpdateProductDto) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products[index] = {
      ...this.products[index],
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products.splice(index, 1);
    return true;
  }
}
