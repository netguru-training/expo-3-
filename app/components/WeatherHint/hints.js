const TEMP_THRESHOLD_COLD = -5,     // [°C]
      TEMP_THRESHOLD_HOT = 30,      // [°C]
      RAIN_THRESHOLD = 5,           // [mm]
      SNOW_THRESHOLD = 10;          // [mm]
      WIND_SPEED_THRESHOLD = 10;    // [m/s]

      HINTS = {
        storms: "Watch out for thunderstorms!",
        cold: "It will be freezing. Wrap up well!",
        hot: "It's gonna be hot",
        rainy: "It's gonna be rainy, take an umbrella!",
        snow: "Expect lots of snow. How about building a snowman?",
        windy: "There will be gusty wind. Keep your har firmly in place!"
    }
      
      DEFAULT_HINT = "Just another great day!"
        

export default function getHint( {description = '', temp = 0, wind = 0, snow = 0, precip = 0} ) {
    if (description.toLowerCase().includes('thunderstorm')) return HINTS.storms
    if (temp <= TEMP_THRESHOLD_COLD) return HINTS.cold
    if (temp >= TEMP_THRESHOLD_HOT) return HINTS.hot
    if (precip >= RAIN_THRESHOLD) return HINTS.rainy
    if (snow >= SNOW_THRESHOLD) return HINTS.snow
    if (wind >= WIND_SPEED_THRESHOLD) return HINTS.windy
    return DEFAULT_HINT
}

