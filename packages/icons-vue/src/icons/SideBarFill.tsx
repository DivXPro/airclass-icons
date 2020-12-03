// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SideBarFillSvg from '@airclass/icons-svg/lib/asn/SideBarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SideBarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SideBarFillSvg}></AntdIcon>;
};

SideBarFill.displayName = 'SideBarFill';
SideBarFill.inheritAttrs = false;
export default SideBarFill;