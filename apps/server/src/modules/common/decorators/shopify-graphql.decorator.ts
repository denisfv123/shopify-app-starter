import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ShopifyGraphql = createParamDecorator(async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return {
        client: request.client,
        session: request.session
    };
});
