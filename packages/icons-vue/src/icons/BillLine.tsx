// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BillLineSvg from '@airclass/icons-svg/lib/asn/BillLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillLineSvg}></AntdIcon>;
};

BillLine.displayName = 'BillLine';
BillLine.inheritAttrs = false;
export default BillLine;