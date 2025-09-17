import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ship, MapPin, Thermometer, Wind, Gauge, Flag, Clock, Anchor, Navigation, Globe } from "lucide-react";
import { ProgressTimeline } from "./ProgressTimeline";

// Hard-coded data
const shipmentData = {
  shipmentNo: "SH001234567",
  start: "Shanghai, China",
  destination: "New York, USA", 
  atdDate: "2025-08-15T10:30:00Z",
  currentMilestone: "In Transit",
  nextMilestone: "Customs Clearance"
};

const facilityData = [
  { name: "Empezar Global Marine Service Private Limited", locode: "" },
  { name: "Nhava Sheva (India) Gateway Terminal Pvt Ltd", locode: "" },
  { name: "Port Liberty New York", locode: "USNYC" }
];

const vesselData = {
  name: "CMA CGM BIANCA",
  imo: "9436367",
  mmsi: "228123456",
  flag: "France",
  status: "In Transit"
};

const positionData = {
  currentLocation: "New York Harbor, NY, USA",
  timeTravelled: "12 days, 14 hours"
};

const environmentData = {
  windSpeed: {
    avg: "12 knots",
    max: "30.9 knots"
  },
  temperature: {
    min: "18.8°C / 65.84°F",
    max: "25.3°C / 77.54°F"
  },
  speedRange: {
    avg: "12.2 Knots",
    max: "18.4 Knots"
  },
  draught: "12.8 m"
};

const specificationsData = {
  callsign: "FMCY2",
  flag: "France",
  trackingSource: "AIS",
  station: "Port Authority NY/NJ",
  lastLocation: "New York Harbor"
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 pb-safe">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary mb-2">Shipping Dashboard</h1>
            <p className="text-muted-foreground text-sm">Real-time vessel and shipment tracking</p>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Map View</span>
          </Button>
        </div>
      </div>

      {/* Mobile Layout: Stack cards vertically */}
      <div className="block sm:hidden space-y-3 mb-4">
        {/* Top Row - Shipment and Vessel */}
        <div className="grid grid-cols-2 gap-3">
          {/* Shipment Info Card - Mobile */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <Ship className="h-3 w-3" />
                Shipment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">No.</p>
                <p className="font-semibold text-xs">{shipmentData.shipmentNo}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Route</p>
                <p className="text-xs">{shipmentData.start} → {shipmentData.destination}</p>
              </div>
              <div className="flex gap-1 flex-wrap">
                <Badge variant="secondary" className="text-xs px-1 py-0">
                  {shipmentData.currentMilestone}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Vessel Info Card - Mobile */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <Navigation className="h-3 w-3" />
                Vessel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="font-semibold text-xs">{vesselData.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">IMO</p>
                  <p className="text-xs">{vesselData.imo}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Flag</p>
                  <p className="text-xs">{vesselData.flag}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Row - Position and Environment */}
        <div className="grid grid-cols-2 gap-3">
          {/* Position Card - Mobile */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <MapPin className="h-3 w-3" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Current</p>
                <p className="font-semibold text-xs">{positionData.currentLocation}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="text-xs">{positionData.timeTravelled}</p>
              </div>
            </CardContent>
          </Card>

          {/* Environment Data Card - Mobile */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <Thermometer className="h-3 w-3" />
                Environment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Wind</p>
                <p className="text-xs">{environmentData.windSpeed.avg}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Speed</p>
                <p className="text-xs">{environmentData.speedRange.avg}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Temp</p>
                <p className="text-xs">{environmentData.temperature.max}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Third Row - Facilities */}
        <Card className="border-maritime-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-primary text-sm">
              <Anchor className="h-3 w-3" />
              Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {facilityData.map((facility, index) => (
                <div key={index} className="border-b border-maritime-border last:border-b-0 pb-1 last:pb-0">
                  <p className="text-xs font-medium">{facility.name}</p>
                  {facility.locode && (
                    <Badge variant="secondary" className="text-xs mt-1">
                      {facility.locode}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Shipment Info Card */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-base">
                <Ship className="h-4 w-4" />
                Shipment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Shipment No.</p>
                <p className="font-semibold text-sm">{shipmentData.shipmentNo}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Route</p>
                <p className="text-sm">{shipmentData.start} → {shipmentData.destination}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">ATD Date</p>
                <p className="text-sm">{new Date(shipmentData.atdDate).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  Current: {shipmentData.currentMilestone}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Next: {shipmentData.nextMilestone}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Facility Info Card */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-base">
                <Anchor className="h-4 w-4" />
                Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {facilityData.map((facility, index) => (
                  <div key={index} className="border-b border-maritime-border last:border-b-0 pb-2 last:pb-0">
                    <p className="text-xs font-medium mb-1">{facility.name}</p>
                    {facility.locode && (
                      <Badge variant="secondary" className="text-xs">
                        {facility.locode}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vessel Info Card */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-base">
                <Navigation className="h-4 w-4" />
                Vessel Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Vessel Name</p>
                <p className="font-semibold text-sm">{vesselData.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">IMO</p>
                  <p className="text-sm">{vesselData.imo}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">MMSI</p>
                  <p className="text-sm">{vesselData.mmsi}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Flag className="h-3 w-3" />
                <span className="text-sm">{vesselData.flag}</span>
                <Badge variant="secondary" className="text-xs ml-auto">
                  {vesselData.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Position Card */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-base">
                <MapPin className="h-4 w-4" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-semibold text-sm">{positionData.currentLocation}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time Travelled</p>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <p className="text-sm">{positionData.timeTravelled}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environment Data Card */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-base">
                <Thermometer className="h-4 w-4" />
                Environment Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <Wind className="h-3 w-3" />
                  <p className="text-xs text-muted-foreground font-medium">Wind Speed</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Avg: <span className="text-foreground">{environmentData.windSpeed.avg}</span></p>
                  <p className="text-xs text-muted-foreground">Max: <span className="text-foreground">{environmentData.windSpeed.max}</span></p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-2">Temperature</p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Min: <span className="text-foreground">{environmentData.temperature.min}</span></p>
                  <p className="text-xs text-muted-foreground">Max: <span className="text-foreground">{environmentData.temperature.max}</span></p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <Gauge className="h-3 w-3" />
                  <p className="text-xs text-muted-foreground font-medium">Speed Range</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Avg: <span className="text-foreground">{environmentData.speedRange.avg}</span></p>
                  <p className="text-xs text-muted-foreground">Max: <span className="text-foreground">{environmentData.speedRange.max}</span></p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground font-medium">Draught</p>
                <p className="text-sm font-medium">{environmentData.draught}</p>
              </div>
            </CardContent>
          </Card>

          {/* Vessel Specifications Card */}
          <Card className="border-maritime-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-base">
                <Flag className="h-4 w-4" />
                Vessel Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">Call Sign</p>
                  <p className="text-sm font-semibold">{specificationsData.callsign}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Flag</p>
                  <p className="text-sm">{specificationsData.flag}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tracking Source</p>
                <Badge variant="secondary" className="text-xs">
                  {specificationsData.trackingSource}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Station</p>
                <p className="text-sm">{specificationsData.station}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Last Location</p>
                <p className="text-sm">{specificationsData.lastLocation}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Shipment Progress */}
      <Card className="border-maritime-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-primary text-base">Shipment Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ProgressTimeline />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;