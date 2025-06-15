---
sidebar_position: 1
sidebar_label: In Browser
pagination_next: tutorial-basics/tutorial-basics
title: In Browser
description: "Try and run BINSEC directly on your browser."
---

import Icon from '@site/src/components/Icon';
import { Logo, Chrome, Edge, Firefox, Safari, InFirefox, InKnown, InUnknown } from '@site/src/components/Browser';

import { Check } from '@site/src/components/Binsec/Check';

# <Logo /> In Browser

<Check/>

<InKnown>
<InFirefox>
:::warning

Make sure the two options `javascript.options.wasm_gc` and `javascript.options.wasm_tail_calls` are set to `true`.
Type **about:config** in the location bar to check the configuration and activate the switchs if needed.

:::
</InFirefox>

<Icon icon="fa-solid fa-trophy" /> You are all set.
</InKnown>
<InUnknown>
:::danger

BINSEC in browser is still experimental and has never been tested on your browser. Prefer using one of the following: <Chrome/> Chrome, <Edge/> Edge, <Firefox/> Firefox or <Safari/> Safari.

:::
Continue at your own risk.
</InUnknown>


