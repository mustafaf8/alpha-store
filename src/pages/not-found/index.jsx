import { Search, Home, ArrowLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NotFound() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 w-full max-w-xl mx-auto text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        {/* Main Card */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
          
          {/* Big 404 Display */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[120px] md:text-[180px] font-black leading-none text-slate-800 tracking-tighter select-none">
              404
            </h1>
            <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-xl shadow-primary/30 animate-bounce">
              <Search className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight">
              Oops! Page Not Found
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm mx-auto leading-relaxed">
              The page you are looking for doesn't exist or has been moved to another universe.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              asChild 
              className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-95 group"
            >
              <Link to="/shop/home">
                <Home className="mr-2 h-4 w-4" /> 
                Back Home
              </Link>
            </Button>

            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto h-14 px-8 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> 
              Go Back
            </Button>
          </div>

          {/* Quick Links Section */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Try exploring these instead
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/shop/listing" 
                className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition-colors group"
              >
                All Products
                <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="w-1 h-1 rounded-full bg-slate-200 self-center"></div>
              <Link 
                to="/shop/search" 
                className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition-colors group"
              >
                Search Store
                <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Brand Footer */}
        <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          Circle Store © 2024
        </p>
      </div>
    </div>
  );
}

export default NotFound;

