import { Satellite, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const instruments = [
  {
    name: "MOPITT",
    fullName: "Measurements of Pollution in the Troposphere",
    description: "Monitors carbon monoxide pollution in Earth's troposphere using gas correlation spectroscopy.",
    route: "/mopitt",
    primary: true,
  },
  {
    name: "ASTER",
    fullName: "Advanced Spaceborne Thermal Emission and Reflection Radiometer",
    description: "Captures high-resolution images in 14 spectral bands for detailed Earth surface studies.",
    route: "/aster",
    primary: true,
  },
  {
    name: "CERES",
    fullName: "Clouds and the Earth's Radiant Energy System",
    description: "Measures Earth's radiation budget to understand climate and energy balance.",
    route: "/ceres",
    primary: false,
  },
  {
    name: "MISR",
    fullName: "Multi-angle Imaging SpectroRadiometer",
    description: "Views Earth with nine cameras at different angles for unique 3D atmospheric data.",
    route: "/misr",
    primary: false,
  },
  {
    name: "MODIS",
    fullName: "Moderate Resolution Imaging Spectroradiometer",
    description: "Provides daily global coverage in 36 spectral bands for comprehensive Earth monitoring.",
    route: "/modis",
    primary: false,
  },
  {
    name: "TES",
    fullName: "Tropospheric Emission Spectrometer",
    description: "Measured ozone and trace gases in the troposphere (2004-2018).",
    route: "/tes",
    primary: false,
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Satellite className="h-12 w-12 text-primary animate-float" />
            <h1 className="text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Terra Satellite
            </h1>
            <Sparkles className="h-12 w-12 text-accent animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-xl text-foreground/90 mb-4">
            Celebrating 25 Years of Earth Observation Excellence
          </p>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Since December 1999, Terra has been revolutionizing our understanding of Earth's climate system 
            with five sophisticated instruments working in harmony to monitor our planet.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Primary Instruments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {instruments
              .filter((inst) => inst.primary)
              .map((instrument, index) => (
                <Card
                  key={instrument.name}
                  className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(instrument.route)}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary group-hover:scale-105 transition-transform">
                      {instrument.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {instrument.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{instrument.description}</p>
                    <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Explore {instrument.name} →
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Additional Instruments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instruments
              .filter((inst) => !inst.primary)
              .map((instrument, index) => (
                <Card
                  key={instrument.name}
                  className="bg-card/50 backdrop-blur border-secondary/30 hover:border-secondary hover:shadow-[var(--glow-secondary)] transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                  onClick={() => navigate(instrument.route)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary group-hover:scale-105 transition-transform">
                      {instrument.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      {instrument.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{instrument.description}</p>
                    <div className="mt-4 text-secondary text-xs font-medium group-hover:translate-x-2 transition-transform">
                      Learn more →
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur border-accent/30 max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-foreground/70">
                Terra's instruments work together as a coordinated system, providing comprehensive data 
                about Earth's atmosphere, land, and oceans. This multi-instrument approach has revolutionized 
                Earth observation science and continues to provide critical data for climate research.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;