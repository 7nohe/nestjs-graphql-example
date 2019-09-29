import { Resolver, Query } from '@nestjs/graphql';
import { Todo } from './todo';

const mockTodoService = {
  getTodos() {
    return Promise.resolve([
      {
        id: '1',
        title: '読書',
        description: '一時間本を読む',
      },
      {
        id: '2',
        title: 'マラソン',
        description: '一時間マラソンする',
      },
    ]);
  },
};

@Resolver('Todos')
export class TodosResolver {
  @Query(returns => [Todo])
  async todos(): Promise<Todo[]> {
    return await mockTodoService.getTodos();
  }
}
