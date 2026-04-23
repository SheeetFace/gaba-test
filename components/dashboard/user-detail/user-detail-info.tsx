import { Mail, Phone, Briefcase, MapPin, CreditCard, User2, Scissors, MapPinned, Building2, Cake, Droplets, Ruler, Weight, Eye, Bitcoin } from "lucide-react";

import { DetailSection } from "./user-detail-section";
import { InfoRow } from "../shared/user-detail-info-row";

import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

import type { LucideIcon } from "lucide-react";
import type { IAddress, IBank, ICompany, ICrypto, IUser } from "@/types/user";

interface StatItemProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

const StatItem = ({ label, value, icon: Icon, color }: StatItemProps) => (
  <div className="flex flex-col items-center justify-center p-3 border rounded-xl bg-muted/5 shadow-sm space-y-1">
    <div className="flex items-center gap-1.5">
      <Icon className={cn("h-3 w-3 opacity-70", color)} />
      <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-tight">{label}</p>
    </div>
    <p className="text-sm font-bold capitalize">{value}</p>
  </div>
);


export const PersonalBlock = ({ user }: { user: IUser }) => {
  return (
    <DetailSection icon={User2} title="Personal Details">
      <div className="grid grid-cols-3 gap-3">
        <StatItem label="Age" value={user.age} icon={User2} color="text-blue-500" />
        <StatItem label="Gender" value={user.gender} icon={User2} color="text-purple-500" />
        <StatItem label="Birthday" value={user.birthDate} icon={Cake} color="text-pink-500" />

        <StatItem label="Blood" value={user.bloodGroup} icon={Droplets} color="text-red-500" />
        <StatItem label="Height" value={`${user.height} cm`} icon={Ruler} color="text-emerald-500" />
        <StatItem label="Weight" value={`${user.weight} kg`} icon={Weight} color="text-orange-500" />

        <div className="col-span-3 mt-1 grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between p-3 border rounded-xl bg-muted/5">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-sky-500" />
              <span className="text-[10px] font-bold uppercase text-muted-foreground">Eyes</span>
            </div>
            <span className="text-xs font-bold">{user.eyeColor}</span>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-xl bg-muted/5">
            <div className="flex items-center gap-2">
              <Scissors className="h-4 w-4 text-amber-600" />
              <span className="text-[10px] font-bold uppercase text-muted-foreground">Hair</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold capitalize">
                {user.hair.color} ({user.hair.type})
              </span>
            </div>
          </div>

        </div>
      </div>
    </DetailSection>
  );
};

export const EmploymentBlock = ({ company }: { company: ICompany }) => {
  const fullAddress = `${company.address.address}, ${company.address.city}, ${company.address.stateCode}`;

  return (
    <DetailSection icon={Briefcase} title="Employment">
      <div className="space-y-3">
        <div className="border rounded-xl p-4 bg-muted/20 shadow-sm border-primary/10">
          <p className="text-base font-black tracking-tight text-foreground mb-2">
            {company.title}
          </p>

          <div className="flex flex-col gap-1">
            <InfoRow icon={Building2} label="Company" value={company.name} />
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-primary/10 text-primary rounded-md border border-primary/20">
                {company.department}
              </span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-4 bg-muted/20">
          <InfoRow icon={MapPinned} label="Office Location" value={fullAddress} />
        </div>
      </div>
    </DetailSection>
  );
};

export const ContactBlock = ({ email, phone }: { email: string, phone: string }) => (
  <DetailSection icon={Mail} title="Contact Information">
    <div className="flex flex-col gap-1 border rounded-xl p-4 bg-muted/10">
      <InfoRow icon={Mail} label="Email" value={email} />
      <Separator className="opacity-50 mx-2" />
      <InfoRow icon={Phone} label="Phone" value={phone} />
    </div>
  </DetailSection>
);

export const LocationBlock = ({ address, ip }: { address: IAddress, ip: string }) => {
  const lat = address?.coordinates?.lat;
  const lng = address?.coordinates?.lng;

  if (lat === undefined || lng === undefined) return null;

  const zoom = 14;
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <DetailSection icon={MapPin} title="Location">
      <div className="space-y-4">

        <div className="space-y-3">
          <div className="text-sm p-4 border rounded-xl bg-muted/10">
            <p className="font-semibold text-foreground">{address.address}</p>
            <p className="text-muted-foreground">{address.city}, {address.state}</p>
            <p className="text-xs text-primary font-bold uppercase mt-1">{address.country}</p>
          </div>

          <div className="w-full h-48 rounded-xl border bg-muted overflow-hidden relative group">
            <iframe
              title="User Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>

          <div className="flex justify-between items-center p-3 border rounded-lg bg-muted/5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">IP Address</span>
            <span className="text-xs font-mono bg-background px-2 py-0.5 rounded border">{ip}</span>
          </div>
        </div>
      </div>
    </DetailSection>
  );
};


export const FinancialBlock = ({ bank }: { bank: IBank }) => (
  <DetailSection icon={CreditCard} title="Financials">
    <div className="relative group overflow-hidden">
      <div className="bg-gradient-to-br from-[#D4AF37] via-[#F9E498] to-[#AA8A2E] p-5 rounded-2xl text-slate-900 shadow-2xl space-y-5 border border-white/20 transition-transform duration-300">

        <div className="absolute inset-0 bg-yellow-400/20 blur-3xl -z-10 opacity-50" />

        <div className="flex justify-between items-start">
          <p className="text-[10px] font-extrabold opacity-70 uppercase tracking-[0.2em]">
            {bank.cardType} Premium
          </p>
          <CreditCard className="h-6 w-6 opacity-80" />
        </div>

        <p
          className="text-xl font-mono tracking-[0.25em] text-center py-2 text-slate-900/90"
          style={{
            textShadow: '1px 1px 0px rgba(255,255,255,0.3), -1px -1px 0px rgba(0,0,0,0.4)',
            filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'
          }}
        >
          **** **** **** {bank.cardNumber?.slice(-4)}
        </p>

        <div className="flex justify-between items-end">
          <div className="space-y-0.5">
            <p className="text-[8px] opacity-70 uppercase font-bold tracking-tighter">Expires</p>
            <p className="text-xs font-bold font-mono">{bank.cardExpire}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-70 uppercase font-bold tracking-tighter">Currency</p>
            <p className="text-sm font-black italic">{bank.currency}</p>
          </div>
        </div>
      </div>
    </div>
  </DetailSection>
);

export const CryptoBlock = ({ crypto }: { crypto: ICrypto }) => (
  <DetailSection
    title="Crypto Assets"
    badge={
      <div className="flex items-center ">
        <Bitcoin className="h-4 w-4 " />
      </div>
    }
  >
    <div className="border rounded-xl bg-card overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Network Status: Secured
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground uppercase">
          {crypto.coin} / {crypto.network}
        </span>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-end px-0.5">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
              Deposit Address
            </label>
            <span className="text-[9px] text-muted-foreground/60 font-mono">
              Verified
            </span>
          </div>

          <div className="group relative">
            <div className="p-3 bg-muted/50 rounded-lg border font-mono text-[11px] break-all leading-relaxed text-foreground/90 transition-colors group-hover:border-primary/30">
              {crypto.wallet}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border border rounded-lg overflow-hidden">
          <div className="bg-card p-2">
            <p className="text-[9px] uppercase text-muted-foreground font-medium">Standard</p>
            <p className="text-xs font-bold uppercase">{crypto.network}</p>
          </div>
          <div className="bg-card p-2">
            <p className="text-[9px] uppercase text-muted-foreground font-medium">Currency</p>
            <p className="text-xs font-bold uppercase">{crypto.coin}</p>
          </div>
        </div>
      </div>
    </div>
  </DetailSection>
);

