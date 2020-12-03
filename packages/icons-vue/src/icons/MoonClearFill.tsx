// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonClearFillSvg from '@airclass/icons-svg/lib/asn/MoonClearFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonClearFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonClearFillSvg}></AntdIcon>;
};

MoonClearFill.displayName = 'MoonClearFill';
MoonClearFill.inheritAttrs = false;
export default MoonClearFill;