import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MapPin, Ship, Truck } from "lucide-react";

// Hard-coded progress data
const progressData = [
  {
    status: "CUSTOMS RELEASED",
    date: "9/2/2025, 11:45:00 AM",
    location: "NEW YORK New York USA",
    description: "Customs Released",
    statusType: "Unknown",
    facilityName: "",
    routeType: "LAND",
    timezone: "America/New_York",
    completed: true
  },
  {
    status: "ARRIVED", 
    date: "9/7/2025, 9:30:00 PM",
    location: "NEW YORK New York USA",
    description: "Vessel arrival at final POD",
    statusType: "Vessel arrival at final POD",
    facilityName: "",
    vesselName: "CMA CGM BIANCA",
    imo: "9436367",
    voyage: "0INKFW1MA",
    routeType: "SEA",
    timezone: "America/New_York",
    completed: false,
    current: true
  }
];

export const ProgressTimeline = () => {
  return (
    <div className="space-y-4">
      {progressData.map((item, index) => (
        <div key={index} className="relative">
          {/* Timeline connector */}
          {index < progressData.length - 1 && (
            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-maritime-border"></div>
          )}
          
          <div className="flex gap-3">
            {/* Status Icon */}
            <div className="flex-shrink-0 mt-1">
              {item.completed ? (
                <CheckCircle className="h-6 w-6 text-status-success" />
              ) : item.current ? (
                <Clock className="h-6 w-6 text-primary animate-pulse" />
              ) : (
                <div className="h-6 w-6 rounded-full border-2 border-maritime-border bg-background"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="bg-card border border-maritime-border rounded-lg p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-primary text-sm">
                      {item.status}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.date}
                    </p>
                  </div>
                  <Badge 
                    variant={item.completed ? "secondary" : item.current ? "default" : "outline"}
                    className="text-xs flex items-center gap-1"
                  >
                    {item.routeType === "SEA" ? (
                      <Ship className="h-3 w-3" />
                    ) : (
                      <Truck className="h-3 w-3" />
                    )}
                    {item.routeType}
                  </Badge>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm font-medium">{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>

                {/* Additional Details */}
                <div className="space-y-2 text-xs">
                  {item.vesselName && (
                    <div>
                      <span className="text-muted-foreground">Vessel: </span>
                      <span className="font-medium">{item.vesselName}</span>
                    </div>
                  )}
                  {item.imo && (
                    <div>
                      <span className="text-muted-foreground">IMO: </span>
                      <span>{item.imo}</span>
                    </div>
                  )}
                  {item.voyage && (
                    <div>
                      <span className="text-muted-foreground">Voyage: </span>
                      <span>{item.voyage}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Timezone: </span>
                    <span>{item.timezone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};