import MateriaRepositories from "../http/repositories/Materia";
import MateriaService from "../services/materia-service";

export class MateriaServiceFactory {
    static create() {
        const materiaPrisma = new MateriaRepositories();
        return new MateriaService(materiaPrisma);
    }
}