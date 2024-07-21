import { AvatarFallback, AvatarImage, Avatar as ShadcdnAvatar } from "@/components/ui/avatar"
import { CircularProgress } from "@nextui-org/progress"

interface Props {
    name: string
}

export function Avatar({ name }: Props) {

    const fallback = /[a-zA-Z]/.exec(name)?.at(0)
    const progress = 50
    return (
        <div className="flex items-center gap-2">
            <TasksProgress progress={progress}>
                <ShadcdnAvatar className="size-5 m-1.5">
                    <AvatarImage alt={name} />
                    <AvatarFallback className="bg-amber-900 text-white font-medium">
                        {fallback}
                    </AvatarFallback>
                </ShadcdnAvatar>
            </TasksProgress>
            <span className="text-sm font-medium">{name}</span>
        </div>
    )
}

interface TasksProgressProps {
    children: React.ReactNode
    progress: number
}

function TasksProgress({ children, progress }: TasksProgressProps) {

    return (
        <div className="relative">
            {children}
            <CircularProgress
                value={progress}
                className="absolute top-0"
                size="sm"
                classNames={{
                    indicator: "stroke-red-700"
                }}
            />
        </div>
    )
}