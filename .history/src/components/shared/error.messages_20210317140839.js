import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

export const ErrorMessages = () => {
    const { register, handleSubmit, errors, formState } = useForm({ mode: 'onChange' });
    const onSubmit = data => console.log(data);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="content" placeholder="Enter Post Content here!" ref={register({ required: true, pattern: emailRegex })} />
            {errors.content?.type === "required" && REQUIRED_MESSAGE}
            {errors.content?.type === "pattern" && INVALID_EMAIL_MESSAGE}
            <input disabled={!formState.isValid} type="submit" />
        </form>
    );
}
