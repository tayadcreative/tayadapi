import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLoggerService } from 'src/config/logger/logger.service';
import { Prisma } from '@prisma/client';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: CustomLoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    let status: number;
    let message: any;

    // Handle Prisma Client Known Request Errors
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      // Prisma Known Errors
      status = HttpStatus.BAD_REQUEST;
      message = this.handlePrismaError(exception);
    } else if (exception instanceof HttpException) {
      // Handle standard HTTP exceptions
      status = exception.getStatus();
      message = exception.getResponse();
    } else {
      // Handle other exceptions (e.g. Internal Server Error)
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    };

    // Log the error using the custom logger
    this.logger.error(
      `Exception: ${JSON.stringify(errorResponse)}`,
      exception instanceof Error ? exception.stack : '',
    );

    // Send a structured error response to the client
    response.status(status).json(errorResponse);
  }

  // Handle Prisma errors and provide meaningful messages
  private handlePrismaError(
    exception: Prisma.PrismaClientKnownRequestError,
  ): string {
    switch (exception.code) {
      case 'P2002': // Unique constraint violation
        return 'A unique constraint failed on the database.';
      case 'P2003': // Foreign key violation
        return 'A foreign key constraint failed.';
      case 'P2025': // Record not found
        return 'The record was not found.';
      default:
        return 'Database error occurred.';
    }
  }
}
