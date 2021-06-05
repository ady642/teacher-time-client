export default class TeacherFiltersModel {
    matiere: string = 'Maths'

    constructor({ matiere = 'Mathématiques' } = {}) {
    	this.matiere = matiere
    }
}
