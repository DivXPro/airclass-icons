// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankLineSvg from '@airclass/icons-svg/lib/asn/BankLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankLineSvg}></AntdIcon>;
};

BankLine.displayName = 'BankLine';
BankLine.inheritAttrs = false;
export default BankLine;