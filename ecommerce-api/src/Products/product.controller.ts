import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UsePipes,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from './dtos/createProduct.dto';
import { Response } from 'express';

@Controller('api')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('product/add_product')
  async addNewProduct(@Body() product: createProductDto, @Res() res: Response) {
    const response = await this.productService.AddProduct(product);
    console.log(response);
    res.status(200).json(response);
  }

  @Get('product/getall_products')
  async allProducts(@Res() res: Response) {
    const response = await this.productService.getAllProducts();
    console.log(response);
    res.status(200).json(response);
  }

  @Get('product/:proId')
  @UsePipes(ParseIntPipe)
  async getSingleProduct(
    @Param('proId') productId: number,
    @Res() res: Response,
  ) {
    const response = await this.productService.getProductById(productId);
    res.status(200).json(response);
  }
}
