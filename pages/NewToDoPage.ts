import { APIRequestContext, Page } from "@playwright/test";
import ToDoApi from "../apis/ToDoApi";
import User from "../models/User";

export default class NewToDoPage {

   private get newToDoInput() {
        return `[data-testid="new-todo"]`
    }

    private get submitNewTaskButton(){
        return `[data-testid="submit-newTask"]`
    }

    async load(page: Page) {
          await page.goto('/todo/new')
    }

    async addToDo(page: Page, task: string) {
        await page.fill(this.newToDoInput, task)
        await page.click(this.submitNewTaskButton)
    }

    async addToDoUsingApi(request: APIRequestContext,user:User) {
         await new ToDoApi().addToDo(request, user)
    }
}