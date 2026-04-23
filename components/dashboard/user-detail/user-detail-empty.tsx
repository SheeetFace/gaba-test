import { User2 } from "lucide-react";

export function UserDetailEmpty() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-4 animate-in fade-in duration-500">
      <div className="bg-muted p-6 rounded-full">
          <User2 className="h-12 w-12 text-muted-foreground/40" />
      </div>
      <div className="space-y-2 max-w-[280px]">
        <h3 className="font-semibold text-lg">
          Something went wrong
        </h3>
        <p className="text-sm text-muted-foreground">
            We encountered an error while loading the user data. Please try again.
        </p>
      </div>
    </div>
  );
}
