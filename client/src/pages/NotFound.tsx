import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-6 p-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-500">
            <AlertCircle className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-slate-900">Page Not Found</h1>
          <p className="text-slate-600 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold mt-4">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
