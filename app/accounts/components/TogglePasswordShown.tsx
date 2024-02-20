import { TogglePasswordShownProps } from "@/app/interfaces";

export default function TogglePasswordShown(props:TogglePasswordShownProps){
    return props.shown
    ?<button onClick={props.toggleShown} type="button"><i className="text-light bi bi-eye"></i></button>
    :<button onClick={props.toggleShown} type="button"><i className="text-light bi bi-eye-slash"></i></button>
}