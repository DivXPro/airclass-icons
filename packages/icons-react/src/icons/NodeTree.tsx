// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NodeTreeSvg from '@airclass/icons-svg/lib/asn/NodeTree';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeTree = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeTreeSvg} />;

NodeTree.displayName = 'NodeTree';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeTree);