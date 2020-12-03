// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CouponFillSvg from '@airclass/icons-svg/lib/asn/CouponFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CouponFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CouponFillSvg}></AntdIcon>;
};

CouponFill.displayName = 'CouponFill';
CouponFill.inheritAttrs = false;
export default CouponFill;