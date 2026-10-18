import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [ProductsModule, CategoriesModule, UsersModule, OrdersModule, CartsModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
