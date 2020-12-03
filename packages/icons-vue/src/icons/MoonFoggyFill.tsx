// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonFoggyFillSvg from '@airclass/icons-svg/lib/asn/MoonFoggyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonFoggyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonFoggyFillSvg}></AntdIcon>;
};

MoonFoggyFill.displayName = 'MoonFoggyFill';
MoonFoggyFill.inheritAttrs = false;
export default MoonFoggyFill;