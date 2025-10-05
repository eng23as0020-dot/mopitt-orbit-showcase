import { Globe, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Modis = () => {
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
            MODIS
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Moderate Resolution Imaging Spectroradiometer
          </p>
          <p className="text-foreground/80 max-w-3xl mb-6">
            MODIS is a key instrument that views the entire Earth every 1-2 days, capturing data in 36 spectral bands. 
            It provides critical information about land, ocean, and atmospheric processes on a global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Global Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                MODIS images the entire Earth every 1-2 days in 36 spectral bands, providing comprehensive 
                data for monitoring global environmental changes and natural disasters.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-secondary" />
                Vegetation Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Monitors vegetation indices, photosynthetic activity, and land cover changes, 
                essential for agriculture, forestry, and ecosystem health assessment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-accent" />
                Fire Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Provides near-real-time detection of active fires worldwide, supporting firefighting efforts 
                and studying the impact of biomass burning on air quality.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-card/50 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle>Key Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Measures sea surface temperature and ocean color for marine ecosystem studies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Detects and tracks active fires, smoke plumes, and burn scars</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Monitors snow and ice cover, crucial for climate research</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Provides land surface temperature and vegetation indices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Studies cloud properties and atmospheric aerosols</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Modis;