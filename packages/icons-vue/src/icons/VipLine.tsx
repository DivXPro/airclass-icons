// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VipLineSvg from '@airclass/icons-svg/lib/asn/VipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VipLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VipLineSvg}></AntdIcon>;
};

VipLine.displayName = 'VipLine';
VipLine.inheritAttrs = false;
export default VipLine;