// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankCardLineSvg from '@airclass/icons-svg/lib/asn/BankCardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankCardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankCardLineSvg}></AntdIcon>;
};

BankCardLine.displayName = 'BankCardLine';
BankCardLine.inheritAttrs = false;
export default BankCardLine;