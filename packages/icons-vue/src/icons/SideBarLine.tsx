// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SideBarLineSvg from '@airclass/icons-svg/lib/asn/SideBarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SideBarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SideBarLineSvg}></AntdIcon>;
};

SideBarLine.displayName = 'SideBarLine';
SideBarLine.inheritAttrs = false;
export default SideBarLine;