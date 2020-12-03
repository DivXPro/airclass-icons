// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MedalFillSvg from '@airclass/icons-svg/lib/asn/MedalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalFillSvg}></AntdIcon>;
};

MedalFill.displayName = 'MedalFill';
MedalFill.inheritAttrs = false;
export default MedalFill;