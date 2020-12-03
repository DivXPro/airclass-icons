// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HammerFillSvg from '@airclass/icons-svg/lib/asn/HammerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HammerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HammerFillSvg}></AntdIcon>;
};

HammerFill.displayName = 'HammerFill';
HammerFill.inheritAttrs = false;
export default HammerFill;