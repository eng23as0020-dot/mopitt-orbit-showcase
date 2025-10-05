import { Wind, Droplets, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Tes = () => {
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
            TES
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Tropospheric Emission Spectrometer
          </p>
          <p className="text-foreground/80 max-w-3xl mb-6">
            TES was a high-resolution infrared imaging spectrometer that measured ozone and other gases in Earth's 
            troposphere. Though no longer operational, it provided valuable data on air quality and atmospheric composition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-primary" />
                Ozone Profiling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                TES measured vertical profiles of ozone in the troposphere, helping scientists understand 
                pollution transport and its impact on air quality and climate.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-secondary" />
                Water Vapor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Measured water vapor distribution in the troposphere, essential for understanding 
                atmospheric dynamics and improving weather forecasting models.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-accent" />
                Trace Gases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Detected carbon monoxide, methane, and other trace gases, providing insights into 
                pollution sources and atmospheric chemistry processes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-card/50 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle>Scientific Legacy</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Provided first global measurements of tropospheric ozone from space</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Advanced understanding of air quality and pollution transport</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Contributed to climate research through greenhouse gas measurements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Operated from 2004 to 2018, providing 14 years of valuable data</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tes;