"use client"

import { X } from "lucide-react"

import { DetailHeader } from "./user-detail-header"
import { UserDetailEmpty } from "./user-detail-empty"
import { ContactBlock, CryptoBlock, EmploymentBlock, FinancialBlock, LocationBlock, PersonalBlock } from "./user-detail-info"

import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import type { IUser } from "@/types/user"

interface UserDetailSheetProps {
    user: IUser | null
    isOpen: boolean
    onClose: () => void
}

export function UserDetailSheet({ user, isOpen, onClose }: UserDetailSheetProps) {
    return (
        <aside
            className={cn(
                "z-50 bg-card border-l transition-all duration-300 ease-in-out shadow-xl overflow-hidden",
                "fixed inset-y-0 right-0 sm:relative sm:inset-auto",
                isOpen
                    ? "w-full sm:w-[450px] opacity-100 rounded-md"
                    : "w-0 opacity-0 border-none"
            )}
        >
            <div className="absolute right-0 top-0 h-full w-full sm:w-[450px] flex flex-col ">

                <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-2 z-20"
                    onClick={onClose}
                >
                    <X className="h-4 w-4" />
                </Button>

                {!user ? (
                    <UserDetailEmpty />
                ) : (
                    <ScrollArea className="h-full w-full">
                            <DetailHeader
                                firstName={user.firstName}
                                lastName={user.lastName}
                                image={user.image}
                                username={user.username}
                                role={user.role}
                            />
                            <div className="px-6 pb-12 space-y-6">
                                <PersonalBlock user={user} />
                                <Separator />
                                <EmploymentBlock company={user.company} />
                                <Separator />
                                <ContactBlock email={user.email} phone={user.phone} />
                                <Separator />
                                <LocationBlock address={user.address} ip={user.ip} />
                                <Separator />
                                <FinancialBlock bank={user.bank} />
                                <Separator />
                                <CryptoBlock crypto={user.crypto} />
                            </div>
                    </ScrollArea>
                )}
            </div>
        </aside>
    )
}
