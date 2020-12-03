// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonFoggyLineSvg from '@airclass/icons-svg/lib/asn/MoonFoggyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonFoggyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonFoggyLineSvg}></AntdIcon>;
};

MoonFoggyLine.displayName = 'MoonFoggyLine';
MoonFoggyLine.inheritAttrs = false;
export default MoonFoggyLine;