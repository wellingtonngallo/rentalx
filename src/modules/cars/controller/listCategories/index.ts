import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesService } from "../../services/ListCategoriesService";
import { ListCategoriesController } from "./ListCategoriesController";


const categoriesRepository = CategoryRepository.getInstance();
const listCategoriesSerivce = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesSerivce);

export { listCategoriesController }