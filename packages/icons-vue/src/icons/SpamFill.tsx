// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpamFillSvg from '@airclass/icons-svg/lib/asn/SpamFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpamFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpamFillSvg}></AntdIcon>;
};

SpamFill.displayName = 'SpamFill';
SpamFill.inheritAttrs = false;
export default SpamFill;