// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CouponLineSvg from '@airclass/icons-svg/lib/asn/CouponLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CouponLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CouponLineSvg}></AntdIcon>;
};

CouponLine.displayName = 'CouponLine';
CouponLine.inheritAttrs = false;
export default CouponLine;