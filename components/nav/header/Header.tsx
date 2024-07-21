import { DockOutline } from "@/components/icons";
import { Avatar, UserInfo } from "@/components/nav";
import { Button } from "@nextui-org/button";


export function Header() {
    const name = "John Doe";
    return (
        <section className="flex flex-row-reverse justify-between p-2 h-14">
            <div className="peer">
                <input className="invisible absolute" type="checkbox" id="dock" />

                {/* @ts-ignore */}
                <Button as="label" htmlFor="dock" isIconOnly className="rounded-lg size-fit hover:bg-gray-200" disableRipple>
                    <DockOutline className="size-6" />
                </Button>
            </div>
            <UserInfo>
                <Avatar name={name} />
            </UserInfo>
        </section>
    )
}