import { Mountain, Satellite, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Aster = () => {
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
            ASTER
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Advanced Spaceborne Thermal Emission and Reflection Radiometer
          </p>
          <p className="text-foreground/80 max-w-3xl mb-6">
            ASTER is a Japanese instrument that captures high-resolution images of Earth in 14 different wavelengths 
            of light, from visible to thermal infrared. It provides detailed maps of land surface temperature, 
            elevation, and reflectance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5 text-primary" />
                Imaging Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                ASTER captures images in 14 spectral bands, providing unprecedented detail for studying Earth's surface 
                properties, mineral composition, and vegetation health.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-secondary" />
                Thermal Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                With thermal infrared capabilities, ASTER monitors volcanic activity, measures land surface temperature, 
                and studies urban heat islands with high precision.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-accent" />
                3D Mapping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                ASTER creates detailed 3D maps of terrain using stereo imaging, essential for monitoring glaciers, 
                studying landslides, and understanding topographic changes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-card/50 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle>Key Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Creating detailed digital elevation models for topographic mapping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Monitoring volcanic activity and geothermal areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Mapping mineral resources and geological formations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Studying land surface temperature and urban heat islands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Tracking glacier movement and ice sheet dynamics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Aster;