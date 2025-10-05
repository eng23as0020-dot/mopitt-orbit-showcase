import { Camera, Eye, CloudSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Misr = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-6 border-primary/30 hover:bg-primary/10"
        >
          ← Back to Home
        </Button>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            MISR
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Multi-angle Imaging SpectroRadiometer
          </p>
          <p className="text-foreground/80 max-w-3xl mb-6">
            MISR views Earth with nine cameras pointed at different angles, capturing unique 3D information about 
            clouds, aerosols, and Earth's surface from multiple perspectives simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                9 Camera System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Nine cameras view Earth at angles ranging from 70° forward to 70° aft, providing unprecedented 
                multi-angle observations for 3D atmospheric and surface studies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-secondary" />
                Aerosol Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Multi-angle views enable precise measurements of aerosol properties, including particle size, 
                shape, and composition, crucial for air quality monitoring.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudSun className="h-5 w-5 text-accent" />
                Cloud Heights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Stereoscopic imaging allows MISR to measure cloud-top heights with high accuracy, 
                improving weather forecasting and climate models.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-card/50 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle>Research Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Measures aerosol optical depth and particle properties from multiple angles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Determines cloud-top heights and motion for weather prediction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Studies surface bidirectional reflectance for land cover classification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Tracks smoke plumes from wildfires in three dimensions</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Misr;