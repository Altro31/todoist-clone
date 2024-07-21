import { Header, NavOptions, Projects } from "@/components/nav"

interface Props {
    className?: string
}

export function LateralBar({ className }: Props) {
    return (
        <nav className={`bg-blue-200/20 ${className}`}>
            <Header />
            <NavOptions />
            <Projects />
        </nav>
    )
}