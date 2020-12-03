// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RidingFillSvg from '@airclass/icons-svg/lib/asn/RidingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RidingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RidingFillSvg}></AntdIcon>;
};

RidingFill.displayName = 'RidingFill';
RidingFill.inheritAttrs = false;
export default RidingFill;