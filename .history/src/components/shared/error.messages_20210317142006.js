import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

export default ErrorMessage = (props) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [Message, setMessage] = useState("");

    useEffect(() => {
        switch (props.type) {
            case 'required':
                setMessage(REQUIRED_MESSAGE);
            case 'pattern':
                switch (props.patternType) {
                    case 'email':

                        

                    default:
                        break;
                }
                if (props.patternType === "Email") {

                }
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
