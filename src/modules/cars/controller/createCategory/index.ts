
import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoryRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController }