// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LeafLineSvg from '@airclass/icons-svg/lib/asn/LeafLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeafLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeafLineSvg}></AntdIcon>;
};

LeafLine.displayName = 'LeafLine';
LeafLine.inheritAttrs = false;
export default LeafLine;