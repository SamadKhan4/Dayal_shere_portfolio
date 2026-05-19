import React from "react";
import { MapPin, Palette } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <p>Dayal Dilip Shere</p>
      <div>
        <span>
          <MapPin size={16} /> Nagpur, Maharashtra
        </span>
        <span>
          <Palette size={16} /> English, Hindi, Marathi
        </span>
      </div>
    </footer>
  );
}
