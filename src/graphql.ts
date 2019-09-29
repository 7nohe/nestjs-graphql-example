
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IQuery {
    abstract todos(): Todo[] | Promise<Todo[]>;
}

export class Todo {
    id: string;
    title: string;
    description?: string;
}
