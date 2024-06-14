import {
  ApiCreatedResponse,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { applyDecorators, HttpStatus } from '@nestjs/common';

export const ApiOkBaseResponse = ({
  dto,
  isArray,
  meta,
}: {
  dto?: string | any;
  isArray?: boolean;
  meta?: boolean;
}) => {
  return applyDecorators(
    ApiOkResponse({
      description: `${HttpStatus.OK}. Success`,
      schema: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          data: isArray
            ? { items: { $ref: getSchemaPath(dto || '') }, type: 'array' }
            : { $ref: getSchemaPath(dto || '') },
          ...(meta && {
            meta: {
              properties: {
                total: { type: 'number' },
                lastPage: { type: 'number' },
                currentPage: { type: 'number' },
                perPage: { type: 'number' },
                prev: { type: 'number' },
                next: { type: 'number' },
              },
            },
          }),
        },
      },
    }),
  );
};

export const ApiCreatedBaseResponse = ({
  dto,
  isArray,
}: {
  dto?: string | any;
  isArray?: boolean;
} = {}) => {
  return applyDecorators(
    ApiCreatedResponse({
      description: `${HttpStatus.CREATED}. Created`,
      schema: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          data: isArray
            ? { items: { $ref: getSchemaPath(dto || '') }, type: 'array' }
            : { $ref: getSchemaPath(dto || '') },
        },
      },
    }),
  );
};
