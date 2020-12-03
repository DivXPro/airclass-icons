// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankFillSvg from '@airclass/icons-svg/lib/asn/BankFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankFillSvg}></AntdIcon>;
};

BankFill.displayName = 'BankFill';
BankFill.inheritAttrs = false;
export default BankFill;