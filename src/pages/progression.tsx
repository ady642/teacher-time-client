import {FunctionComponent} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";


const Progression: FunctionComponent = () => {
    return <div className={'flex justify-center bg-gray-100 h-full'}>
        <div className="flex flex-col mt-10">
            testprog
        </div>
    </div>
}

(Progression as PageWithLayoutType).layout = DefaultLayout

export default Progression
