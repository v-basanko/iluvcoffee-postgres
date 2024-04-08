import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'A coffees name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'A coffees brand' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: Array<string>;
}
