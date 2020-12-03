// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SunFoggyFillSvg from '@airclass/icons-svg/lib/asn/SunFoggyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunFoggyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFoggyFillSvg}></AntdIcon>;
};

SunFoggyFill.displayName = 'SunFoggyFill';
SunFoggyFill.inheritAttrs = false;
export default SunFoggyFill;