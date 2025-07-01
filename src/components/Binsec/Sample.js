import { useRef, useState } from "react";

import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

import Icon from "@site/src/components/Icon";
import Toggle from "@site/src/components/Toggle";

import { Chrome, Edge, Firefox, Safari } from '@site/src/components/Browser';



export function Sample({ Model, value, width, height, filename, binary, noinfo, trace, ...props }) {

    const [_, setTick] = useState(Date.now())
    const [running, setRunning] = useState(false);
    const [script, setScript] = useState(value);
    const [heuristic] = useState(props.heuristic === undefined ? "dfs" : props.heuristic)
    const [maxDepth] = useState(props.maxDepth === undefined ? 1000 : props.maxDepth);
    const [debugLevel, setDebugLevel] = useState(trace === undefined ? (-1) : trace === 'on' ? 2 : (-1));
    const [info] = useState(noinfo === undefined ? true : !noinfo);
    const [checkct, setCheckct] = useState(props.checkct === undefined ? 0 : props.checkct === 'on' ? 1 : 0);
    const [output] = useState([]);

    const traceInstruction = /^0x[0-9a-f]+\s+(?!anonymous)/i

    const sendRequest = () => {
        setTick(Date.now());
        if (self['main-worker-ready']) {
            self['main-worker-ready'] = false;
            self['main-worker'].onmessage = (e) => {
                setTick(Date.now());
                switch (e.data[0]) {
                    case 'debug':
                        if (traceInstruction.test(e.data[1]))
                            output.push(e.data[1]);
                        break;
                    case 'info':
                        if (info)
                            output.push(e.data[1]);
                        break;
                    case 'log':
                        output.push(e.data[1]);
                        break;
                    case 'warn':
                        output.push(<Admonition type="warning">
                            <span>{e.data[1]}</span>
                        </Admonition>)
                        break;
                    case 'error':
                        output.push(<Admonition type="danger" title="Error">
                            <span>{e.data[1]}</span>
                        </Admonition>);
                        break;
                    case 'finished':
                        setRunning(false);
                        self['main-worker-ready'] = true;
                        break;
                    case 'status':
                        if (e.data[1] == 'undefined') {
                            output.push(<Admonition type="warning" title="Not yet">
                                <b>BINSEC</b> modules are not yet ready. If you just reloaded the page, try again in a few seconds.<br />Otherwise, something may have gone wrong. <b>BINSEC</b> compilation to Web Assembly is still experimental, consider using the native version or maybe try with  another browser (<Chrome /> Chrome, <Edge /> Edge, <Firefox /> Firefox or <Safari /> Safari).
                            </Admonition>);
                            break;
                        }
                    default:
                        output.push(<span style={{ color: 'var(--ifm-color-danger)' }}>Unexpected message from worker.<br /></span>);
                }
            };
            output.length = 0;
            setRunning(true);
            binary.then((buffer) => {
                self['main-worker'].postMessage(['run', filename, buffer, script, heuristic, maxDepth, debugLevel, checkct]);
            })
        } else {
            output.length = 0;
            output.push(<span style={{ color: 'var(--ifm-color-danger)' }}>An instance of BINSEC is already running.<br /></span>);
            output.push(<span style={{ color: 'var(--ifm-color-danger)' }}>Refresh the page if you do not want to wait for the result.</span>);
        }
    }

    const handleToggleCheckct = () => setCheckct(1 - checkct)

    const handleToggleTrace = () => setDebugLevel(debugLevel < 0 ? 2 : (-1))

    const buttons = <div style={{ position: 'flex' }}>
        <button
            className="button button--primary"
            onClick={sendRequest}
            disabled={running}
        >
            {running ? <Icon icon="fa-spinner" spin pulse /> : <Icon icon="fa-solid fa-play" />} Run
        </button>
        {trace === 'toggle' &&
            <Toggle title="Trace" value={checkct === 0} onChange={handleToggleTrace} />}
        {props.checkct === 'toggle' &&
            <Toggle title="Check CT" value={checkct === 0} onChange={handleToggleCheckct} />}
    </div>

    return (
        <div display='grid'>
            <Model value={value} width={width} height={height} onChange={setScript} />
            {props.children !== undefined &&
                <Tabs groupId="setup" queryString>
                    <TabItem value="browser" label="Browser" default>
                        {buttons}
                        <CodeBlock language='plain' title='Output'>{output}</CodeBlock>
                    </TabItem>
                    <TabItem value="command-line" label="Command-line">
                        {props.children}
                    </TabItem>
                </Tabs>
            }
            {props.children === undefined &&
                [
                    buttons,
                    <CodeBlock language='plain' title='Output'>{output}</CodeBlock>]}
        </div>
    )
}