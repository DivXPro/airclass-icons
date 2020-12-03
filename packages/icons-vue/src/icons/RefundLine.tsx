// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RefundLineSvg from '@airclass/icons-svg/lib/asn/RefundLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefundLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefundLineSvg}></AntdIcon>;
};

RefundLine.displayName = 'RefundLine';
RefundLine.inheritAttrs = false;
export default RefundLine;