import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

export default ErrorMessage = (props) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const [Message, setMessage] = useState("");

    useEffect(() => {
        props.error
        switch (props.type) {
            case 'required':
                setMessage(REQUIRED_MESSAGE);
            case 'pattern':
                setMessage(REQUIRED_MESSAGE);
            case 'required':
                setMessage(REQUIRED_MESSAGE);
            case 'required':
                setMessage(REQUIRED_MESSAGE);
            default:
                break;
        }
    }, [])
    return (

        <>

        </>
    );
}
