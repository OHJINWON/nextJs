import './page.scss';
import AddSchedule from './addSchedule';
import PulsSchedule from './pulsSchedule';

export default function Schedule(props) {

    return(
        <div className="contentBox">
            <div className='aa box__01'>
                <div className='box__content'>
                    <div className="treeBox">
                        <input className="treeText" type="text"/>   
                    </div>
                </div>
                <AddSchedule/>
            </div>
            <PulsSchedule/>
        </div>
    )
}
