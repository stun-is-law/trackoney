import { FC } from "react";

interface IfProps {
    condition: boolean;
    children: JSX.Element | JSX.Element[];
}

const If:FC<IfProps> = ({
    condition, 
    children,
}) => condition ? <>{children}</> : null

export default If;