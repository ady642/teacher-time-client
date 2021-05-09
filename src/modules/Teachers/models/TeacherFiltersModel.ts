export default class TeacherFiltersModel {
    matiere: string = 'Maths'

    constructor({ matiere = 'Maths' } = {}) {
        this.matiere = matiere
    }
}
