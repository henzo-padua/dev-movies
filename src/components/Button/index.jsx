import { ButtonRed, ButtonWhite } from "./styles";

export function Button({ children, red, ...rest }) {

    return (
        <>{red ? (
            <ButtonRed {...rest}>{children}</ButtonRed>
        ) : (
            <ButtonWhite {...rest}>{children}</ButtonWhite>
        )}


        </>
    )
}