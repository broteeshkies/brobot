import AntonsAction from './AntonsAction';
import AzazaAction from './AzazaAction';
import BayanAction from './BayanAction';
import BoobsAction from './BoobsAction';
import BratanAction from './BratanAction';
import BratishkaAction from './BratishkaAction';
import CatsAction from './CatsAction';
import CounterAction from './CounterAction';
import DeanonAction from './DeanonAction';
import FerretAction from './FerretAction';
import GayAction from './GayAction';
import InitAction from './InitAction';
import MobxAction from './MobxAction';
import OkAction from './OkAction';
import PlacesAction from './PlacesAction';
import PolundraAction from './PolundraAction';
import PrivateMessageAction from './PrivateMessageAction';
import RepostAction from './RepostAction';
// import SatanAction from './SatanAction';
import TodayAction from './TodayAction';
import TuesdayAction from './TuesdayAction';
import WinAction from './WinAction';

const actionClasses = [
    InitAction,
    RepostAction,
    PrivateMessageAction,
    DeanonAction,
    PlacesAction,
    CatsAction,
    AntonsAction,
    AzazaAction,
    BayanAction,
    BoobsAction,
    BratanAction,
    BratishkaAction,
    CounterAction,
    FerretAction,
    GayAction,
    MobxAction,
    OkAction,
    PolundraAction,
    // SatanAction,
    TodayAction,
    TuesdayAction,
    WinAction,
];

export default ({ bot }) => actionClasses.map(ActionClass => new ActionClass(bot));
