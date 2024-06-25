"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPrismaService = void 0;
const common_1 = require("@nestjs/common");
const custom_prisma_constants_1 = require("./custom-prisma.constants");
let CustomPrismaService = class CustomPrismaService {
    constructor(client) {
        this.client = client;
    }
    async enableShutdownHooks(app) {
        this.client.$on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.CustomPrismaService = CustomPrismaService;
exports.CustomPrismaService = CustomPrismaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(custom_prisma_constants_1.CUSTOM_PRISMA_CLIENT)),
    __metadata("design:paramtypes", [Object])
], CustomPrismaService);
//# sourceMappingURL=custom-prisma.service.js.map