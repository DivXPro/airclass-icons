// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonFillSvg from '@airclass/icons-svg/lib/asn/MoonFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonFillSvg}></AntdIcon>;
};

MoonFill.displayName = 'MoonFill';
MoonFill.inheritAttrs = false;
export default MoonFill;