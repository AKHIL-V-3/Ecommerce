import { Injectable } from '@nestjs/common';
import { createProductDto } from './dtos/createProduct.dto';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async AddProduct(Product: createProductDto) {
    try {
      const response = await this.prisma.products.create({
        data: {
          Productname: Product.Productname,
          Price: Product.Price,
          Description: Product.Description,
          Brand: Product.Brand,
          Storagecapacity: Product.Storagecapacity,
          Colors: Product.Colors,
          Category: Product.Category,
          Stock: Product.Stock,
          Images: {
            create: Product.Images.map((url) => ({ Image: url })),
          },
        },
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async getAllProducts() {
    try {
      const products = await this.prisma.products.findMany({
        include: {
          Images: true,
        },
      });
      return products;
    } catch (err) {
      console.log(err);
    }
  }

  async getProductById(productId: number) {
    try {
      const product = await this.prisma.products.findUnique({
        where: {
          id: productId,
        },
        include: {
          Images: true,
        },
      });
      return product;
    } catch (err) {
      console.log(err);
    }
  }
}
