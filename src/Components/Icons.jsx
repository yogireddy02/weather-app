import React from 'react';
import windIcon from '../assets/Wind.png';
import humidityIcon from '../assets/humidity.png';
import visibilityIcon from '../assets/visibility.png';
import sunriseIcon from '../assets/Sunrise.png';
import sunsetIcon from '../assets/Sunset.png';

const Icon = ({src,alt,className, ...props}) => (
    <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} {...props} />
);

export const WindIcon = (props) => <Icon src={windIcon} alt="Wind Icon" className="animate-icon svg-hover" {...props} />;
export const HumidityIcon = (props) => <Icon src={humidityIcon} alt="Humidity Icon" className="powerful-pulse svg-hover" {...props} />;
export const VisibilityIcon = (props) => <Icon src={visibilityIcon} alt="Visibility Icon" className="powerful-pulse svg-hover" {...props} />;
export const SunriseIcon = (props) => <Icon src={sunriseIcon} alt="Sunrise Icon" className="powerful-pulse svg-hover" {...props} />;
export const SunsetIcon = (props) => <Icon src={sunsetIcon} alt="Sunset Icon" className="powerful-pulse svg-hover" {...props} />;