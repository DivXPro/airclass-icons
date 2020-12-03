// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankCardFillSvg from '@airclass/icons-svg/lib/asn/BankCardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankCardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankCardFillSvg}></AntdIcon>;
};

BankCardFill.displayName = 'BankCardFill';
BankCardFill.inheritAttrs = false;
export default BankCardFill;