import clsx from "clsx"
import React, { useId, useState } from "react";

import { Tooltip } from 'react-tooltip';

import { ThemeClassNames, usePrismTheme, useColorMode } from '@docusaurus/theme-common';
import { getPrismCssVariables } from '@docusaurus/theme-common/internal';

export default function Disassmelby({ source, ...props }) {

    const prismTheme = usePrismTheme();
    const prismCssVariables = getPrismCssVariables(prismTheme);

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
                            {<details>
                                <summary>{node.address} {node.mnemonic}</summary>
                                <pre>
                                    {node.code.map(ins =>
                                        <code>{ins.id}: {ins.op}<br /></code>
                                    )}
                                </pre>
                            </details>}
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

    return (<pre>
        {(Array.isArray(source)) &&
            source.map((section, i) =>
                <details>
                    <summary>Disassembly of section {section.section}:<br /></summary>
                    <table>
                        <tbody>
                            {section.disassembly.map((instruction) => {
                                const row = instruction.symbols.map((symbol, i) =>
                                    <tr>
                                        <td colSpan={3}>
                                            {instruction.address.substring(2).padStart(8, 0)} &lt;{symbol}&gt;:
                                        </td>
                                    </tr>);
                                row.push(<tr>
                                    <td>
                                        {instruction.address.substring(2).padStart(8, ' ')}:
                                    </td>
                                    <td>
                                        {instruction.opcode}
                                    </td>
                                    <td>
                                        <details>
                                            <summary>{instruction.mnemonic}</summary>
                                            <pre>
                                                {instruction.code.map(ins =>
                                                    <code>{ins.id}: {ins.lines.map(line =>
                                                        <span>{line}<br /></span>
                                                    )}</code>
                                                )}
                                            </pre>
                                        </details>
                                    </td>
                                </tr>);
                                return row;
                            })}
                        </tbody>
                    </table>
                </details>
            )}
        {(source.error !== undefined) &&
            <span>{source.error}</span>}
    </pre>)
} 
