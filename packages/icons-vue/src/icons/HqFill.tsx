// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HqFillSvg from '@airclass/icons-svg/lib/asn/HqFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HqFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HqFillSvg}></AntdIcon>;
};

HqFill.displayName = 'HqFill';
HqFill.inheritAttrs = false;
export default HqFill;