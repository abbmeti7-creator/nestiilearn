import { Injectable, OnModuleInit } from '@nestjs/common';

export interface Category {
  id: number;
  name: string;
  slug: string;
}

@Injectable()
export class CategoriesService implements OnModuleInit {
  private categories: Category[] = [];

  onModuleInit() {
    if (this.categories.length === 0) {
      this.categories = [
        { id: 1, name: 'Electronics', slug: 'electronics' },
        { id: 2, name: 'Home & Kitchen', slug: 'home-kitchen' },
      ];
      console.log('[CategoriesService] Seeded sample categories');
    }
  }

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category | undefined {
    return this.categories.find((c) => c.id === id);
  }
}
