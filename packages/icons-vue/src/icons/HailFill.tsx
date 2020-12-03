// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HailFillSvg from '@airclass/icons-svg/lib/asn/HailFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HailFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HailFillSvg}></AntdIcon>;
};

HailFill.displayName = 'HailFill';
HailFill.inheritAttrs = false;
export default HailFill;