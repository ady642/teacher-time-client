import {FunctionComponent, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import PESelect from "@/common/components/Selects/Select";
import TeacherFiltersModel from "@/modules/Home/models/TeacherFiltersModel";

interface TeacherFiltersProps {
}

const TeacherFilters: FunctionComponent<TeacherFiltersProps> = () => {
    const [filters, setFilters] = useState(new TeacherFiltersModel())

    const handleChangeMatiere = (matiere: string) => {
        const newFilters = {...filters}
        newFilters.matiere = matiere
        setFilters(newFilters)
    }

    return <div className={'flex flex-col p-8'}>
        <div className={'flex'}>
            <h1 className={'flex items-center text-2xl'}>Trouver un professeur</h1>
            <div className="relative ml-6">
                <input type="search" className="bg-purple-white shadow rounded border-0 p-3"
                       placeholder="Search by name..."/>
                <SearchIcon className="absolute" style={{right: 10, top: 12}}/>
            </div>
        </div>
        <div className={'mt-4 flex'}>
            <PESelect value={filters.matiere} handleChange={handleChangeMatiere}/>
        </div>
    </div>
}

export default TeacherFilters
