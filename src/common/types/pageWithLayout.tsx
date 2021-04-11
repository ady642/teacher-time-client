import { NextPage } from 'next'
import DefaultLayout from '@/common/layouts/DefaultLayout'

type PageWithDefaultLayoutType = NextPage & { layout: typeof DefaultLayout }

type PageWithLayoutType = PageWithDefaultLayoutType

export default PageWithLayoutType
