import { ReactNode, FC } from 'react'
import Header from '@/common/components/Headers/Header'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header isMain={true} />
            {children}
        </>
    )
}

export default Layout
