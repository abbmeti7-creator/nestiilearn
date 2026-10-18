import { Injectable, OnModuleInit } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  stock: number;
}

@Injectable()
export class ProductsService implements OnModuleInit {
  private products: Product[] = [];

  onModuleInit() {
    if (this.products.length === 0) {
      this.products = [
        { id: 1, name: 'Laptop', price: 999, categoryId: 1, stock: 10 },
        { id: 2, name: 'Mouse', price: 29, categoryId: 1, stock: 100 },
        { id: 3, name: 'Coffee Mug', price: 12, categoryId: 2, stock: 50 },
      ];
      console.log('[ProductsService] Seeded sample products');
    }
  }

  findAll(category?: string): Product[] {
    if (category) {
      return this.products.filter(
        (p) => p.categoryId === Number(category),
      );
    }
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  create(data: Omit<Product, 'id'>): Product {
    const newProduct: Product = { id: this.products.length + 1, ...data };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, data: Partial<Product>): Product | undefined {
    const product = this.findOne(id);
    if (!product) return undefined;
    Object.assign(product, data);
    return product;
  }

  remove(id: number): boolean {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}
