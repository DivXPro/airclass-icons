// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NodeTreeSvg from '@airclass/icons-svg/lib/asn/NodeTree';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeTree = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NodeTreeSvg}></AntdIcon>;
};

NodeTree.displayName = 'NodeTree';
NodeTree.inheritAttrs = false;
export default NodeTree;