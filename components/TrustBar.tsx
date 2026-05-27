import { Star, BadgeCheck, Truck, PenTool } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-surface-container-low border-y border-outline-variant/10 py-stack-md">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-stack-md">
        <div className="flex items-center justify-center space-x-2">
          <Star className="text-primary fill-primary" size={20} />
          <span className="font-label-caps text-label-caps uppercase text-on-surface">4.9/5 Google Rated</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <BadgeCheck className="text-primary" size={20} />
          <span className="font-label-caps text-label-caps uppercase text-on-surface">92.5 Hallmarked</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Truck className="text-primary" size={20} />
          <span className="font-label-caps text-label-caps uppercase text-on-surface">Pan-India Insured</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <PenTool className="text-primary" size={20} />
          <span className="font-label-caps text-label-caps uppercase text-on-surface">100% Customisable</span>
        </div>
      </div>
    </div>
  );
}
