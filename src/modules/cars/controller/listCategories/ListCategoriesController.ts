import { Request, Response } from "express";

import { ListCategoriesService } from '../../services/ListCategoriesService';

class ListCategoriesController {
  constructor(private listCategoriesSerivce: ListCategoriesService) {}

  handle(request: Request, response: Response) {
    const all = this.listCategoriesSerivce.execute();

    return response.json(all);
  }
}

export { ListCategoriesController }