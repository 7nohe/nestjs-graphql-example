import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule,
    GraphQLModule.forRoot({
      // typePaths: ['./src/**/*.graphql'],
      autoSchemaFile: './src/schema.graphql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
