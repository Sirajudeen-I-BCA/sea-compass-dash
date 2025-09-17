import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, MapPin, Thermometer, Wind, Gauge, Flag, Clock, Anchor, Navigation } from "lucide-react";
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

const facilityData = {
  name: "Port of New York",
  locode: "USNYC"
};

const vesselData = {
  name: "CMA CGM BIANCA",
  imo: "9436367",
  mmsi: "228123456",
  flag: "France",
  status: "In Transit"
};

const positionData = {
  currentPosition: "40.6892°N, 74.0445°W",
  timeTravelled: "12 days, 14 hours"
};

const environmentData = {
  windSpeed: "15 knots",
  temperature: "22°C",
  speedRange: "12-18 knots",
  draught: "14.2m"
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
    <div className="min-h-screen bg-background p-4 pb-safe">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary mb-2">Shipping Dashboard</h1>
        <p className="text-muted-foreground text-sm">Real-time vessel and shipment tracking</p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
              Facility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-xs text-muted-foreground">Facility Name</p>
              <p className="font-semibold text-sm">{facilityData.name}</p>
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground">LOCODE</p>
              <Badge variant="secondary" className="text-xs">
                {facilityData.locode}
              </Badge>
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
              Current Position
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Coordinates</p>
              <p className="font-semibold text-sm">{positionData.currentPosition}</p>
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
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-1">
                <Wind className="h-3 w-3" />
                <div>
                  <p className="text-xs text-muted-foreground">Wind Speed</p>
                  <p className="text-sm">{environmentData.windSpeed}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Temperature</p>
                <p className="text-sm">{environmentData.temperature}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3" />
                <div>
                  <p className="text-xs text-muted-foreground">Speed Range</p>
                  <p className="text-sm">{environmentData.speedRange}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Draught</p>
                <p className="text-sm">{environmentData.draught}</p>
              </div>
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