// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SunFillSvg from '@airclass/icons-svg/lib/asn/SunFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFillSvg}></AntdIcon>;
};

SunFill.displayName = 'SunFill';
SunFill.inheritAttrs = false;
export default SunFill;