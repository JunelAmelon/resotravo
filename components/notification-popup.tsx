"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { NOTIFICATIONS } from "@/lib/constants";
import { MapPin } from "lucide-react";

export function NotificationPopup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * NOTIFICATIONS.length);
      const { name, city } = NOTIFICATIONS[randomIndex];
      
      toast(
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-orange-500" />
          <span>
            <strong>{name}</strong> de <strong>{city}</strong> vient de réserver sa place !
          </span>
        </div>,
        {
          duration: 5000,
        }
      );
    };
    
    // Show first notification after a short delay
    const initialTimeout = setTimeout(() => {
      showRandomNotification();
    }, 5000);
    
    // Then show notifications every 20 seconds
    const interval = setInterval(showRandomNotification, 20000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);
  
  if (!mounted) return null;
  return null;
}