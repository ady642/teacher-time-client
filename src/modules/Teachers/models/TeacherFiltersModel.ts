export default class TeacherFiltersModel {
    matiere: string = 'maths'

    constructor({ matiere = 'maths' } = {}) {
    	this.matiere = matiere
    }
}
