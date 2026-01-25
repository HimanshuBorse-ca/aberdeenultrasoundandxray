// import { Toaster } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import NotFound from "@/pages/NotFound";
// import { Route, Switch } from "wouter";
// import ErrorBoundary from "./components/ErrorBoundary";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import Home from "./pages/Home";
// import XRay from "./pages/XRay";
// import Ultrasound from "./pages/Ultrasound";
// import Resources from "./pages/Resources";
// import About from "./pages/About";
// import Contact from "./pages/Contact";


// function Router() {
//   return (
//     <Switch>
//       <Route path={"/"} component={Home} />
//       <Route path={"/x-ray"} component={XRay} />
//       <Route path={"/ultrasound"} component={Ultrasound} />
//       <Route path={"/resources"} component={Resources} />
//       <Route path={"/about"} component={About} />
//       <Route path={"/contact"} component={Contact} />
//       <Route path={"/404"} component={NotFound} />
//       {/* Final fallback route */}
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// // NOTE: About Theme
// // - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
// //   to keep consistent foreground/background color across components
// // - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

// function App() {
//   return (
//     <ErrorBoundary>
//       <ThemeProvider
//         defaultTheme="light"
//         // switchable
//       >
//         <TooltipProvider>
//           <Toaster />
//           <Router />
//         </TooltipProvider>
//       </ThemeProvider>
//     </ErrorBoundary>
//   );
// }

// export default App;

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router } from "wouter"; 
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Import your Pages
import Home from "./pages/Home";
import XRay from "./pages/XRay";
import Ultrasound from "./pages/Ultrasound";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      {/* Locally, this base path might make the URL look like:
          localhost:5173/aberdeenultrasoundandxray/
      */}
      <Router base="/aberdeenultrasoundandxray">
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/x-ray" component={XRay} />
              <Route path="/ultrasound" component={Ultrasound} />
              <Route path="/resources" component={Resources} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </TooltipProvider>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;