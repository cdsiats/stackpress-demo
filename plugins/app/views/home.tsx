import { useState } from "react";
import { ServerPageProps } from "stackpress";

export function Head(props: ServerPageProps) {
    const { styles = [] } = props;

    return (
        <>
            <title>StackPress Demo</title>
            <meta name="description" content="Welcome to stackpress." />
            {styles.map((href, index) => (
                <link key={index} rel="stylesheet" type="text/css" href={href} />
            ))}
        </>
    )
}

export default function HomePage(props: ServerPageProps) {

    const { response } = props;
    const { name = 'guest' } = (response.results as { name?: string }) || {};

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Welcome {name} to Stackpress!</h1>
            <button onClick={() => setCount(count => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}