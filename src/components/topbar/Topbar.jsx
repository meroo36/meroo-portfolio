import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        meroo.
                    </a>
                    <div className="itemContainer">
                        <Mail />
                        <span>mdogruca@gmail.com</span>
                    </div>
                </div>
                <div className="right">this is right</div>
            </div>
        </div>
    );
}
