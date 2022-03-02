import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/CreateCategoryService";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request,  response: Response) {
    const { name, description } = request.body;

    this.createCategoryService.execute({name, description})
  
    return response.status(201).send();
  }
}

export { CreateCategoryController }