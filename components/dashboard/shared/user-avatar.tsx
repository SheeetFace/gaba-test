import { User2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  image?: string
  firstName?: string
  lastName?: string
  className?: string
}

export function UserAvatar({ image, firstName, lastName, className }: UserAvatarProps) {
  return (
    <Avatar className={`h-9 w-9 border shadow-sm shrink-0 ${className}`}>
      <AvatarImage src={image} alt={firstName} />
      <AvatarFallback className="text-xs font-bold bg-muted uppercase">
        {firstName?.charAt(0)}
        {lastName?.charAt(0)}
        {(!firstName && !lastName) && <User2 className="h-4 w-4 opacity-50" />}
      </AvatarFallback>
    </Avatar>
  )
}
