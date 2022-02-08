// pegando icones dinamicamente com tipagem 
import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import EnergySvg from "../assets/energy.svg";
import ExchanceSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from '../assets/car.svg'


//passar o type
export function getAcessoryIcon(type:string) {
    switch(type) {
        case 'speed':
            return SpeedSvg;
        case 'acceleration':
            return AccelerationSvg;

        case 'force':
            return ForceSvg;
        
        case 'gasoline':
            return GasolineSvg;

        case 'energy':
            return EnergySvg;

        case 'exchange':
            return ExchanceSvg;

        case 'people':
            return  PeopleSvg;

        default:
            return CarSvg;
                
    }
}