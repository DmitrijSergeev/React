import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    
    return <div className={s.dialog}>
    <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? s.active : s.dialog }>
        {props.name}</NavLink>
    </div>
}
const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name= 'Dimych' id='1'/>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" className = { navData => navData.isActive ? s.active : s.dialog }>Andrew</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" className = { navData => navData.isActive ? s.active : s.dialog }>Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" className = { navData => navData.isActive ? s.active : s.dialog }>Pavel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" className = { navData => navData.isActive ? s.active : s.dialog }>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6" className = { navData => navData.isActive ? s.active : s.dialog }>Valery</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
};
export default Dialogs;