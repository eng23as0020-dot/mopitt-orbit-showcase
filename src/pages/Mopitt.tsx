import { useState, useMemo } from "react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Calendar, TrendingUp, Wind, Activity, AlertTriangle, Leaf, Factory, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import terraData from "@/assets/terra_data.csv?raw";
import mopittImg from "@/assets/mopitt-instrument.jpg";
import coPollutionImg from "@/assets/co-pollution.jpg";

interface DataPoint {
  date: string;
  year: number;
  month: number;
  co_ppm: number;
  aod_unitless: number;
}

const Mopitt = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("2010-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");

  const parsedData = useMemo(() => {
    const lines = terraData.split("\n").slice(1);
    const data: DataPoint[] = [];
    
    lines.forEach((line) => {
      if (!line.trim()) return;
      const [date, year, month, , , co, aod] = line.split(",");
      data.push({
        date,
        year: parseInt(year),
        month: parseInt(month),
        co_ppm: parseFloat(co),
        aod_unitless: parseFloat(aod),
      });
    });
    
    return data;
  }, []);

  const filteredData = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return parsedData.filter((d) => {
      const date = new Date(d.date);
      return date >= start && date <= end;
    });
  }, [parsedData, startDate, endDate]);

  const aggregatedData = useMemo(() => {
    const monthlyData: { [key: string]: { co: number[]; aod: number[] } } = {};
    
    filteredData.forEach((d) => {
      const key = `${d.year}-${String(d.month).padStart(2, "0")}`;
      if (!monthlyData[key]) {
        monthlyData[key] = { co: [], aod: [] };
      }
      monthlyData[key].co.push(d.co_ppm);
      monthlyData[key].aod.push(d.aod_unitless);
    });
    
    return Object.entries(monthlyData)
      .map(([date, values]) => ({
        date,
        co_avg: values.co.reduce((a, b) => a + b, 0) / values.co.length,
        aod_avg: values.aod.reduce((a, b) => a + b, 0) / values.aod.length,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [filteredData]);

  const stats = useMemo(() => {
    if (filteredData.length === 0) return { avgCO: 0, maxCO: 0, avgAOD: 0, maxAOD: 0 };
    
    const coValues = filteredData.map((d) => d.co_ppm);
    const aodValues = filteredData.map((d) => d.aod_unitless);
    
    return {
      avgCO: (coValues.reduce((a, b) => a + b, 0) / coValues.length).toFixed(3),
      maxCO: Math.max(...coValues).toFixed(3),
      avgAOD: (aodValues.reduce((a, b) => a + b, 0) / aodValues.length).toFixed(3),
      maxAOD: Math.max(...aodValues).toFixed(3),
    };
  }, [filteredData]);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                MOPITT
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Measurements of Pollution in the Troposphere
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                MOPITT is a Canadian instrument aboard Terra that measures carbon monoxide (CO) pollution in the troposphere. 
                It uses gas correlation spectroscopy to detect CO concentrations, helping scientists understand pollution transport 
                and its impact on air quality across the Indo-Gangetic Plain region.
              </p>
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-1.5" />
                  <span><strong>Launch:</strong> December 18, 1999</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-1.5" />
                  <span><strong>Origin:</strong> Canadian Space Agency & University of Toronto</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-1.5" />
                  <span><strong>Technology:</strong> Gas Correlation Spectroscopy</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-1.5" />
                  <span><strong>Coverage:</strong> Global measurements every 3 days</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-primary/30 shadow-[var(--glow-primary)]">
              <img 
                src={mopittImg} 
                alt="MOPITT Instrument"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                <p className="text-xs text-muted-foreground">MOPITT Instrument on Terra Satellite</p>
              </div>
            </div>
          </div>

          <Alert className="mb-6 border-accent/50 bg-accent/10">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <AlertTitle className="text-accent">Critical Environmental Monitoring</AlertTitle>
            <AlertDescription className="text-foreground/80">
              MOPITT provides essential data for tracking air pollution patterns, supporting public health initiatives, 
              and informing climate policy decisions worldwide.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Wind className="h-4 w-4 text-primary" />
                Avg CO Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.avgCO} ppm</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                Max CO Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.maxCO} ppm</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4 text-secondary" />
                Avg AOD
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.avgAOD}</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-secondary" />
                Max AOD
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.maxAOD}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-card/50 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Select Date Range
            </CardTitle>
            <CardDescription>Filter data by selecting start and end dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">Start Date</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-background/50 border-primary/30"
                />
              </div>
              <div>
                <Label htmlFor="end-date">End Date</Label>
                <Input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-background/50 border-primary/30"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Showing {filteredData.length.toLocaleString()} data points from {aggregatedData.length} months
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">CO Impact on Environment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur border-destructive/30 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={coPollutionImg} 
                  alt="CO Pollution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Factory className="h-5 w-5" />
                  Sources of CO Pollution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Vehicle Emissions:</strong> Primary source in urban areas from incomplete combustion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Industrial Processes:</strong> Manufacturing and fossil fuel burning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Biomass Burning:</strong> Forest fires and agricultural burning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Residential Heating:</strong> Wood and coal combustion in homes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-destructive/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Heart className="h-5 w-5" />
                  Health Impacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Oxygen Depletion:</strong> CO binds to hemoglobin, reducing oxygen delivery to organs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Cardiovascular Stress:</strong> Increased risk for heart disease and stroke</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Neurological Effects:</strong> Headaches, dizziness, cognitive impairment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span><strong>Vulnerable Groups:</strong> Children, elderly, and those with respiratory conditions</span>
                  </li>
                </ul>
                <Alert className="border-destructive/40 bg-destructive/10">
                  <AlertDescription className="text-sm">
                    High CO exposure can be fatal. The Indo-Gangetic Plain experiences some of the world's highest CO concentrations.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur border-secondary/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Leaf className="h-5 w-5" />
                Environmental & Climate Effects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Atmospheric Chemistry</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Contributes to ground-level ozone formation through photochemical reactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Affects hydroxyl radical (OH) concentrations, altering atmospheric oxidation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Influences methane lifetime in the atmosphere</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Climate Implications</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Acts as an indirect greenhouse gas by influencing ozone and methane</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Average atmospheric lifetime of 1-2 months allows for long-range transport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Contributes to regional air quality degradation across continents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <TrendingUp className="h-5 w-5" />
                Indo-Gangetic Plain: A Hotspot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                The Indo-Gangetic Plain (IGP) spanning northern India, Pakistan, and Bangladesh is one of Earth's most polluted regions. 
                MOPITT data reveals consistently elevated CO levels due to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">High Population Density</h5>
                  <p className="text-sm text-foreground/70">Over 900 million people generate massive vehicular and industrial emissions</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Agricultural Burning</h5>
                  <p className="text-sm text-foreground/70">Seasonal crop residue burning releases enormous CO quantities</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Meteorological Trapping</h5>
                  <p className="text-sm text-foreground/70">Himalayan mountains and atmospheric conditions trap pollutants</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 mt-12">
          <h2 className="text-3xl font-bold text-primary">Interactive Data Visualization</h2>
          
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <CardTitle>Carbon Monoxide (CO) Concentration Over Time</CardTitle>
              <CardDescription>Monthly average CO levels in parts per million (ppm)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={aggregatedData}>
                  <defs>
                    <linearGradient id="colorCO" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(189 95% 52%)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(189 95% 52%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 25%)" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(215 20% 65%)"
                    tick={{ fill: "hsl(215 20% 65%)" }}
                  />
                  <YAxis 
                    stroke="hsl(215 20% 65%)"
                    tick={{ fill: "hsl(215 20% 65%)" }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(222 47% 15%)", 
                      border: "1px solid hsl(189 95% 52% / 0.3)",
                      borderRadius: "0.5rem"
                    }}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="co_avg" 
                    stroke="hsl(189 95% 52%)" 
                    fillOpacity={1}
                    fill="url(#colorCO)"
                    name="CO (ppm)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20">
            <CardHeader>
              <CardTitle>Aerosol Optical Depth (AOD) Trends</CardTitle>
              <CardDescription>Monthly average AOD measurements (unitless)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={aggregatedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 25%)" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(215 20% 65%)"
                    tick={{ fill: "hsl(215 20% 65%)" }}
                  />
                  <YAxis 
                    stroke="hsl(215 20% 65%)"
                    tick={{ fill: "hsl(215 20% 65%)" }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(222 47% 15%)", 
                      border: "1px solid hsl(262 52% 47% / 0.3)",
                      borderRadius: "0.5rem"
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="aod_avg" 
                    stroke="hsl(262 52% 47%)" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(262 52% 47%)", r: 3 }}
                    name="AOD"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mopitt;