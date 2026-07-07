import React from 'react';

interface GreeterProps {
    personName: string
}

function Greeter(props: GreeterProps): React.JSX.Element {
    const { personName } = props;
    return (
        <div>Hello! {personName}</div>
    )
}

export default Greeter
