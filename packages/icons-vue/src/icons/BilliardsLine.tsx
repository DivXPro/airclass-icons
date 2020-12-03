// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BilliardsLineSvg from '@airclass/icons-svg/lib/asn/BilliardsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilliardsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BilliardsLineSvg}></AntdIcon>;
};

BilliardsLine.displayName = 'BilliardsLine';
BilliardsLine.inheritAttrs = false;
export default BilliardsLine;