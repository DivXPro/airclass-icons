// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RainbowFillSvg from '@airclass/icons-svg/lib/asn/RainbowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RainbowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RainbowFillSvg}></AntdIcon>;
};

RainbowFill.displayName = 'RainbowFill';
RainbowFill.inheritAttrs = false;
export default RainbowFill;