import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-500 text-black-coffee px-4 py-3 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-black-coffee" />
          <span className="font-glacial font-semibold text-sm sm:text-base">
            🚧 DEMO SITE - This is for demonstration purposes only. Most features are not functional yet.
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-black-coffee hover:bg-yellow-600 hover:text-black-coffee p-1"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DemoBanner; 