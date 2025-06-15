import { useRef, useState } from "react";

import Admonition from '@theme/Admonition';

import Icon from "@site/src/components/Icon";
import { Logo, Chrome, Edge, Firefox, Safari, InFirefox, InKnown, InUnknown } from '@site/src/components/Browser';

export function Check() {

    const [running, setRunning] = useState(false);
    const [output, setOutput] = useState(<></>);

    const sendRequest = () => {
        if (self['main-worker-ready']) {
            self['main-worker-ready'] = false;
            self['main-worker'].onmessage = (e) => {
                switch (e.data[0]) {
                    case 'version':
                        if (e.data[1] === '0.10.1-wasm') {
                            setOutput(<div>
                                <Admonition type="tip" title="You are all set" />
                                <Admonition type="note">
                                    <b>BINSEC</b> compilation to Web Assembly is still experimental. Only a subset of the platform features has been ported and the performance scales worst than native compilation.
                                </Admonition>
                            </div>);
                            break;
                        }
                    default:
                        setOutput(<Admonition type="danger" title="An error occured">
                            <b>BINSEC</b> compilation to Web Assembly is still experimental and has never been tested on your browser. Prefer using one of the following: <Chrome/> Chrome, <Edge/> Edge, <Firefox/> Firefox or <Safari/> Safari.
                        </Admonition>)
                }
                self['main-worker-ready'] = true;
                setRunning(false);
            };
            setRunning(true);
            self['main-worker'].postMessage(['version']);
        } else {
            setOutput(<Admonition type="warning">
                It seems an instance of BINSEC has already been started.
                Please, refresh the page and try again.
            </Admonition>)
        }
    }

    return (
        <div>
            <button
                className="button button--primary button--block"
                onClick={sendRequest}
                disabled={running}
            >
                Click here to check if BINSEC is readily available on your browser.
            </button>
            {output}
        </div>
    )
}


