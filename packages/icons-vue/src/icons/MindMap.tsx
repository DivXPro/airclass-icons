// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MindMapSvg from '@airclass/icons-svg/lib/asn/MindMap';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MindMap = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MindMapSvg}></AntdIcon>;
};

MindMap.displayName = 'MindMap';
MindMap.inheritAttrs = false;
export default MindMap;