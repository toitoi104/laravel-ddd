import React from "react";
import { Helmet } from "react-helmet";

interface HeadProps {
    title: string;
}

const Head: React.FC<HeadProps> = ({ title }): JSX.Element => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default Head;
