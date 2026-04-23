import { UserAvatar } from "../shared/user-avatar"

import { Badge } from "@/components/ui/badge"

import { getRoleStyles, getUserGradient } from "@/lib/utils"

interface DetailHeaderProps {
  firstName: string;
  lastName: string;
  image: string;
  username: string;
  role: string;
}

export function DetailHeader({ firstName, lastName, image, username, role }: DetailHeaderProps) {

  const colors = getUserGradient(username);

  return (
    <div className="relative pb-6">

      <div
        className="h-32 w-full transition-colors duration-500"
        style={{
          background: `linear-gradient(to right, ${colors.from}, ${colors.to})`
        }}
      />

      <div className="relative -mt-12 mb-4 flex justify-center px-6">
        <UserAvatar
          image={image}
          firstName={firstName}
          lastName={lastName}
          className="h-24 w-24 border-4 border-background shadow-xl text-2xl"
        />
      </div>

      <div className="text-center space-y-1 px-6">
        <h2 className="text-2xl font-black tracking-tighter uppercase text-foreground">
          {firstName} {lastName}
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="secondary" className="px-3 font-bold">@{username}</Badge>
          <Badge variant="outline"className={`capitalize font-bold ${getRoleStyles(role)}`}>
            {role}
          </Badge>
        </div>
      </div>
    </div>
  )
}

