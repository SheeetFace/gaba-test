export function DashboardFooter() {
  return (
    <footer className="py-1 mt-auto">
      <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wider">
        <span>Last sync: {new Date().toLocaleTimeString()}</span>
        <span className="opacity-40">•</span>
        <div className="flex items-center gap-1">
          <span>Created by</span>
          <a 
            href="https://github.com/SheeetFace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-black text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            Sheeetface
          </a>
        </div>
      </div>
    </footer>
  )
}
