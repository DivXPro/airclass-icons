// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckDoubleFillSvg from '@airclass/icons-svg/lib/asn/CheckDoubleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckDoubleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckDoubleFillSvg}></AntdIcon>;
};

CheckDoubleFill.displayName = 'CheckDoubleFill';
CheckDoubleFill.inheritAttrs = false;
export default CheckDoubleFill;