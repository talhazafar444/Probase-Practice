import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

export default ErrorMessage = (props) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const [Message, setMessage] = useState("");

    useEffect(() => {
        props.error
        switch (props.type) {
            case 'required':


            default:
                break;
        }
    }, [])
    return (

        <>

        </>
    );
}
