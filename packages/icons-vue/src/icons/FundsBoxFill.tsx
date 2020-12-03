// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FundsBoxFillSvg from '@airclass/icons-svg/lib/asn/FundsBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundsBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundsBoxFillSvg}></AntdIcon>;
};

FundsBoxFill.displayName = 'FundsBoxFill';
FundsBoxFill.inheritAttrs = false;
export default FundsBoxFill;