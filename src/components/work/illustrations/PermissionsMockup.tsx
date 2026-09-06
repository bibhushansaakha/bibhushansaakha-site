import { BrowserFrame } from "../BrowserFrame";
import { MapPin } from "lucide-react";

const staff = [
  { name: "Sita Shrestha", role: "Location Manager", locations: ["Jawalakhel"] },
  { name: "Ramesh Thapa", role: "Cashier", locations: ["Jawalakhel", "Patan"] },
  { name: "Anjali Gurung", role: "Regional Owner", locations: ["All locations"] },
];

export function PermissionsMockup() {
  return (
    <BrowserFrame label={"Settings \u203a Team & Permissions"}>
      <div className="space-y-2.5">
        {staff.map((person) => (
          <div
            key={person.name}
            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-ink-100 bg-white px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-ink-800">{person.name}</p>
              <p className="text-xs text-ink-400">{person.role}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {person.locations.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent"
                >
                  <MapPin size={11} />
                  {loc}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Illustrative recreation of the permission-chip concept, not the production interface.
      </p>
    </BrowserFrame>
  );
}
