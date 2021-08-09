import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumEventType } from "./EnumEventType";
@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  eventOn?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumEventType,
  })
  @IsEnum(EnumEventType)
  @Field(() => EnumEventType)
  type!: "birthday" | "workrsary" | "meeting" | "activity";
}
export { EventCreateInput };