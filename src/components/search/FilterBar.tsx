import React, { useState } from "react";
// import 
import { useTranslation } from "react-i18next";

interface FilterBarProps {
  minFollowers: number;
  maxFollowers: number;
  onFilterChange: (min: number, max: number) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ minFollowers, maxFollowers, onFilterChange }) => {
  const [minValue, setMinValue] = useState(minFollowers);
  const [maxValue, setMaxValue] = useState(maxFollowers);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinValue(value);
    onFilterChange(value, maxValue);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 300000;
    setMaxValue(value);
    onFilterChange(minValue, value);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMaxValue(value);
    onFilterChange(minValue, value);
  };
 const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-4 FilterbyBg shadow-md rounded-2xl  ">
      <h3 className="text-lg font-semibold text-[#2E354F] mb-1">{t("FilterbyFollowers")}</h3>
      <div className="flex flex-col w-full max-w-md">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{minValue.toLocaleString()}</span>
          <span>{maxValue >= 300000 ? "300k+" : maxValue.toLocaleString()}</span>
        </div>
        
        {/* Simple range slider replacement */}
        <div className="w-full">
          <input
            type="range"
            min={minFollowers}
            max={maxFollowers}
            value={maxValue}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #172D4F 0%, #172D4F ${((maxValue - minFollowers) / (maxFollowers - minFollowers)) * 100}%, #e5e7eb ${((maxValue - minFollowers) / (maxFollowers - minFollowers)) * 100}%, #e5e7eb 100%)`
            }}
          />
        </div>
        
        {/* Input fields for precise control */}
        <div className="flex gap-4 mt-4">
          <div className="flex-1">
            <label className="text-xs text-gray-600">Min</label>
            <input
              type="number"
              value={minValue}
              onChange={handleMinChange}
              className="w-full px-3 py-2 text-sm text-[#2c2c54] bg-white/50 border border-[rgba(0,0,0,0.1)] rounded-xl outline-none backdrop-blur-sm transition duration-300 ease-in-out shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              min={0}
              max={maxValue}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-600">Max</label>
            <input
              type="number"
              value={maxValue}
              onChange={handleMaxChange}
             className="w-full px-3 py-2 text-sm text-[#2c2c54] bg-white/50 border border-[rgba(0,0,0,0.1)] rounded-xl outline-none backdrop-blur-sm transition duration-300 ease-in-out shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              min={minValue}
              max={300000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;