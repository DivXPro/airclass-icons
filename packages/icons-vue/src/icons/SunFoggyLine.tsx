// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SunFoggyLineSvg from '@airclass/icons-svg/lib/asn/SunFoggyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunFoggyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFoggyLineSvg}></AntdIcon>;
};

SunFoggyLine.displayName = 'SunFoggyLine';
SunFoggyLine.inheritAttrs = false;
export default SunFoggyLine;