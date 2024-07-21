'use client'

import { ArrowDown2Thin } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@nextui-org/button";
import { useState } from "react";

interface Props {
    children: React.ReactNode;
}

export function UserInfo({ children }: Props) {

    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                
                <Button disableRipple className="group flex items-center w-fit rounded-lg hover:bg-gray-200 transition-colors duration-500 peer-has-[#dock:checked]:hidden" onPress={() => setOpen(!open)}>
                    {children}
                    <ArrowDown2Thin className="group-[[data-state=open]]:rotate-180 transition-transform size-6" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">

            </DropdownMenuContent>
        </DropdownMenu>
    )
}