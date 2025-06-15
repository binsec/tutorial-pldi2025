import clsx from "clsx"
import React, { useId, useState } from "react";

import { Tooltip } from 'react-tooltip';

import { ThemeClassNames, usePrismTheme, useColorMode } from '@docusaurus/theme-common';
import { getPrismCssVariables } from '@docusaurus/theme-common/internal';

import Objdump from '@site/src/components/Objdump';

import styles from "./styles.module.css"

export default function Hexdump({ source, ...props }) {

    const prismTheme = usePrismTheme();
    const prismCssVariables = getPrismCssVariables(prismTheme);

    const config = {
        magic: { color: 'var(--ifm-color-info)', padding: '1px', radius: '10px', },
        header: { color: 'var(--ifm-color-info-darkest)', padding: '4px', radius: '0px', },
        section: { color: 'var(--ifm-color-secondary-darkest)', padding: '4px', radius: '0px', },
        instruction: { color: 'var(--ifm-color-danger)', padding: '2px', radius: '10px', },
        symbol: { color: 'transparent', padding: '0px', radius: '0px', },
        string: { color: '#32d8b4', padding: '1px', radius: '10px', },
    }

    const backgroundColor = (node) => {
        if (node.label === 'section')
            if (node.flags.includes('r')) {
                if (node.flags.includes('x'))
                    return 'var(--ifm-color-danger-darkest)';
                else if (node.flags.includes('w'))
                    return '#25c2a0';
                else return '#1fa588';
            }
        return config[node.label].color;
    }

    const tooltips = [];

    const id = props.id === undefined ? useId() : props.id;

    const dump = (start, node) => {
        if (Array.isArray(node)) {
            const content = [];
            const end = node.reduce((acc, node) => {
                if (acc !== 0 && (acc & 1) == 0)
                    content.push(<span key={id + '-space-' + acc.toString()}> </span>);
                const [pos, subcontent] = dump(acc, node);
                content.push(subcontent);
                return pos;
            }, start);
            return [end, content];
        } else {
            if ('label' in node) {
                let [end, content] = dump(start, node.content);
                if (node.label === 'instruction') {
                    const iid = id + '-inst-' + start.toString();
                    content =
                        <span className={styles['instruction']} key={iid} data-tooltip-id={iid}>{content}</span>
                    tooltips.push(
                        <Tooltip key={id + '-tooltip-' + start.toString()} id={iid}
                            role='dialog'
                            place='right-end'
                            opacity='1'
                            variant={useColorMode().colorMode}
                            openOnClick
                            clickable>
                            <h3>{node.opcode}</h3>
                            <span>{node.address} {node.mnemonic}</span>{/* 
                            {<details>
                                <summary>{node.address} {node.mnemonic}</summary>
                                <pre>
                                    {node.code.map(ins =>
                                        <code>{ins.id}: {ins.op}<br /></code>
                                    )}
                                </pre>
                            </details>} */}
                        </Tooltip>)
                } else if (node.label == 'symbol') {
                    const iid = id + '-sym-' + start.toString();
                    content =
                        <span className={styles['symbol']} key={iid} title={node.name}>{content}</span>
                }
                return [end,
                    (<span key={id + '-node-' + start} className={styles['hex-label']} title={'name' in node ? node.name : node.string} style={{
                        backgroundColor: backgroundColor(node),
                        borderRadius: config[node.label].radius,
                        color: '#fff', // 'light-dark(#fff, #000)',
                        paddingTop: config[node.label].padding,
                        paddingBottom: config[node.label].padding,
                        display: 'content',
                    }} >{content}</span>)
                ];
            }
            const content = [];
            node.bytes.forEach((byte, idx) => {
                content.push(<span key={id + '-byte-' + (start + idx).toString()}>{byte.toString(16).padStart(2, 0)}</span>);
                if (idx + 1 < node.bytes.length && ((start + idx) & 1) !== 0)
                    content.push(<span key={id + '-space-' + (start + idx).toString()}> </span>);
            });
            return [start + node.size, content];
        }
    }

    const [size, content] = dump(0, source);

    return (
        <div>
            <div className={styles['hex-panel']} style={prismCssVariables}>
                <div
                    className={styles['hex-dump']}
                >
                    <div>
                        {Array.from({ length: Math.ceil(size / 16) },
                            (_, idx) => (<span key={id + '-offset-' + idx.toString()} className={clsx(styles['hex-offset'], styles['not-selectable'])}>{
                                (16 * idx).toString(16).padStart(8, 0)}
                            </span>))}
                    </div>
                    <div>{content}</div>
                    {tooltips}
                </div>
                <div className={styles['hex-legend']}>
                    <table>
                        <tbody>
                            <tr >
                                <th >Legend</th>
                            </tr>
                            <tr >
                                <td >
                                    <span style={{
                                        backgroundColor: config['header'].color,
                                        borderRadius: config['header'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['header'].padding,
                                        paddingBottom: config['header'].padding,
                                    }} >Headers</span>
                                    <span > </span>
                                    <span style={{
                                        backgroundColor: config['magic'].color,
                                        borderRadius: config['magic'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['magic'].padding,
                                        paddingBottom: config['magic'].padding,
                                    }} >Magic</span>
                                </td>
                            </tr>
                            <tr >
                                <td >
                                    <span style={{
                                        backgroundColor: backgroundColor({ label: 'section', flags: 'r-x' }),
                                        borderRadius: config['section'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['section'].padding,
                                        paddingBottom: config['section'].padding,
                                    }} >Code</span>
                                    <span > </span>
                                    <span style={{
                                        backgroundColor: config['instruction'].color,
                                        borderRadius: config['instruction'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['instruction'].padding,
                                        paddingBottom: config['instruction'].padding,
                                    }} >Instructions</span>
                                </td>
                            </tr>
                            <tr >
                                <td >
                                    <span style={{
                                        backgroundColor: backgroundColor({ label: 'section', flags: 'r--' }),
                                        borderRadius: config['section'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['section'].padding,
                                        paddingBottom: config['section'].padding,
                                    }} >Read-Only Data</span>
                                    <span > </span>
                                    <span style={{
                                        backgroundColor: config['string'].color,
                                        borderRadius: config['string'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['string'].padding,
                                        paddingBottom: config['string'].padding,
                                    }} >Strings</span>
                                </td>
                            </tr>
                            <tr >
                                <td >
                                    <span style={{
                                        backgroundColor: backgroundColor({ label: 'section', flags: 'rw-' }),
                                        borderRadius: config['section'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['section'].padding,
                                        paddingBottom: config['section'].padding,
                                    }} >Data</span>
                                    <span > </span>
                                    <span style={{
                                        backgroundColor: backgroundColor({ label: 'section', flags: '---' }),
                                        borderRadius: config['section'].radius,
                                        color: '#fff',
                                        paddingLeft: '1em',
                                        paddingRight: '1em',
                                        paddingTop: config['section'].padding,
                                        paddingBottom: config['section'].padding,
                                    }} >Other Sections</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
            {(props.headers !== undefined && props.disassembly !== undefined) &&
                <Objdump {...props} />
            }
        </div>
    )
} 
