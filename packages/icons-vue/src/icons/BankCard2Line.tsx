// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankCard2LineSvg from '@airclass/icons-svg/lib/asn/BankCard2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankCard2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankCard2LineSvg}></AntdIcon>;
};

BankCard2Line.displayName = 'BankCard2Line';
BankCard2Line.inheritAttrs = false;
export default BankCard2Line;