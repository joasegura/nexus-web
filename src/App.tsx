import React, { useState } from "react";
import {
  Truck,
  Users,
  FileText,
  BarChart3,
  Package,
  Warehouse,
  Building2,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Zap,
  Menu,
  X,
  Router,
  Route,
} from "lucide-react";
import Navbar from "./components/navbar";
import Landing from "./components/landing";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Landing />
      <Router>
        <Route path="/login" />
      </Router>
    </div>
  );
}

export default App;
