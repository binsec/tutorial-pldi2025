import { useState } from "react";


import Icon from "@site/src/components/Icon";

export function Describe({ binary }) {

    const [running, setRunning] = useState(false);
    const [output, setOutput] = useState(<pre></pre>);

    const sendRequest = () => {
        if (self['main-worker-ready']) {
            self['main-worker-ready'] = false;
            self['main-worker'].onmessage = (e) => {
                switch (e.data[0]) {
                    case 'describe':
                        setOutput(<pre>
                            <code>{e.data[1]}</code>
                        </pre>)
                        break;
                    default:
                        setOutput(<pre>
                            <span style={{ color: 'var(--ifm-color-danger)' }}>Unexpected message from worker.<br /></span>
                        </pre>)
                }
                self['main-worker-ready'] = true;
                setRunning(false);
            };
            setRunning(true);
            binary.then((buffer) => {
                self['main-worker'].postMessage(['describe', buffer]);
            })
        } else {
            setOutput(<pre>
                <span style={{ color: 'var(--ifm-color-danger)' }}>An instance of BINSEC is already running.<br /></span>
                <span style={{ color: 'var(--ifm-color-danger)' }}>Refresh the page if you do not want to wait for the result.</span>
            </pre>)
        }
    }

    return (
        <div>
            <button
                className="button button--primary"
                onClick={sendRequest}
                disabled={running}
            >
                {running ? <Icon icon="fa-spinner" spin pulse /> : <Icon icon="fa-solid fa-play" />} Run
            </button>
            {output}
        </div>
    )
}


