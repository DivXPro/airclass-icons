// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BillFillSvg from '@airclass/icons-svg/lib/asn/BillFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillFillSvg}></AntdIcon>;
};

BillFill.displayName = 'BillFill';
BillFill.inheritAttrs = false;
export default BillFill;