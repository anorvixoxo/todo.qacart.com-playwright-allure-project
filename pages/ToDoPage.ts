import { Page } from "@playwright/test"


export default class ToDoPage{

    private get welcomeMessage() {
        return `[data-testid="welcome"]`
    }
    private get deleteIcon() {
        return `[data-testid="delete"]`
    }

    private get noToDosMessage(){
        return `[data-testid="no-todos"]`
    }

    private get toDoItem() {
        return `[data-testid="todo-item"]`
    } 

    async load(page) {
        await page.goto('/todo')
    }

    getWelcomeMessageLocator(page: Page) {
       return page.locator(this.welcomeMessage)
    }

    async deleteToDo(page: Page) {
        await page.click(this.deleteIcon)
    }

    async getNoToDoMessage(page: Page) {
        return page.locator(this.noToDosMessage)
    }

    async getToDoItem(page: Page) {
        return page.locator(this.toDoItem)
    }

}