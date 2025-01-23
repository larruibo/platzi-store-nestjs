import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

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

  getById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(product);
    return product;
  }
}
