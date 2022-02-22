import {eachDayOfInterval, format,parseISO} from 'date-fns';
import {MarkedDateProps,DayProps} from '.';
import {getPlataformDate} from '../../utils/getPlataformDate';
import theme from '../../style/global/theme';


export function GenereteInterval(start:DayProps, end:DayProps){
    let interval: MarkedDateProps = {};

    eachDayOfInterval({ start: parseISO(start.dateString), end: parseISO(end.dateString)})
    .forEach((item) => {
        const date = format(getPlataformDate(item), 'yyyy-MM-dd');

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date 
                ? theme.colors.main : theme.colors.main_light,
 
                textColor: start.dateString === date || end.dateString === date
                ? theme.colors.shape : theme.colors.main,


            }
        }
    });

    return interval;
   ;
}



