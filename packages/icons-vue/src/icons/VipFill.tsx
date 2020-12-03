// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VipFillSvg from '@airclass/icons-svg/lib/asn/VipFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VipFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VipFillSvg}></AntdIcon>;
};

VipFill.displayName = 'VipFill';
VipFill.inheritAttrs = false;
export default VipFill;