import { Satellite, Sparkles, Rocket, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import StarField from "@/components/StarField";
import nasaLogo from "@/assets/nasa-logo.png";
import terraHero from "@/assets/terra-hero.jpg";

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
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <StarField />
      
      <div className="absolute top-0 left-0 right-0 h-[60vh] z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${terraHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 animate-slide-up">
            <img src={nasaLogo} alt="NASA" className="h-16 w-auto" />
            <div className="h-12 w-px bg-primary/30" />
            <div className="text-left">
              <p className="text-sm text-primary/80">In Partnership With</p>
              <p className="text-xs text-muted-foreground">National Aeronautics and Space Administration</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Rocket className="h-14 w-14 text-primary animate-float drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <h1 className="text-7xl font-bold bg-gradient-accent bg-clip-text text-transparent drop-shadow-2xl">
              Terra Satellite
            </h1>
            <Sparkles className="h-14 w-14 text-accent animate-float drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]" style={{ animationDelay: "1s" }} />
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full mb-4 animate-pulse-glow">
            <Globe className="h-5 w-5 text-primary animate-rotate-slow" />
            <p className="text-2xl font-semibold text-primary">
              25 Years of Earth Observation Excellence
            </p>
          </div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Since December 1999, Terra has been revolutionizing our understanding of Earth's climate system 
            with six sophisticated instruments working in harmony to monitor our planet from space.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Primary Instruments
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Click on any instrument to explore detailed information and interactive data visualizations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {instruments
              .filter((inst) => inst.primary)
              .map((instrument, index) => (
                <Card
                  key={instrument.name}
                  className="bg-card/70 backdrop-blur-xl border-primary/40 hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-500 cursor-pointer group animate-slide-up transform hover:scale-105 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => navigate(instrument.route)}
                >
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                  <CardHeader className="relative">
                    <CardTitle className="text-3xl text-primary group-hover:scale-110 transition-all duration-300 font-bold drop-shadow-lg">
                      {instrument.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground/90 font-medium">
                      {instrument.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-foreground/90 leading-relaxed mb-4">{instrument.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:translate-x-3 transition-transform duration-300">
                      <span>Explore {instrument.name}</span>
                      <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                    </div>
                  </CardContent>
                  <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                </Card>
              ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Additional Instruments
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Supporting instruments for comprehensive Earth monitoring
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instruments
              .filter((inst) => !inst.primary)
              .map((instrument, index) => (
                <Card
                  key={instrument.name}
                  className="bg-card/60 backdrop-blur-lg border-secondary/40 hover:border-secondary hover:shadow-[var(--glow-secondary)] transition-all duration-500 cursor-pointer group animate-slide-up transform hover:scale-105 hover:-translate-y-1"
                  style={{ animationDelay: `${(index + 2) * 0.12}s` }}
                  onClick={() => navigate(instrument.route)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  <CardHeader className="relative">
                    <CardTitle className="text-xl text-secondary group-hover:scale-110 transition-all duration-300 font-bold">
                      {instrument.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground/80">
                      {instrument.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm text-foreground/85 leading-relaxed mb-3">{instrument.description}</p>
                    <div className="flex items-center gap-1 text-secondary text-xs font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn more</span>
                      <span className="group-hover:animate-pulse">→</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-card/40 backdrop-blur-xl border-accent/40 max-w-4xl mx-auto overflow-hidden relative group hover:border-accent transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-accent opacity-5 group-hover:opacity-10 transition-opacity" />
            <CardContent className="pt-8 pb-8 relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Satellite className="h-6 w-6 text-accent animate-float" />
                <h3 className="text-2xl font-bold text-accent">Mission Overview</h3>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                Terra's instruments work together as a coordinated system, providing comprehensive data 
                about Earth's atmosphere, land, and oceans. This multi-instrument approach has revolutionized 
                Earth observation science and continues to provide critical data for climate research.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                  <span>Active Since 1999</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <span>6 Instruments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                  <span>NASA Mission</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;