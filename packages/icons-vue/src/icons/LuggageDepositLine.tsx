// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LuggageDepositLineSvg from '@airclass/icons-svg/lib/asn/LuggageDepositLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LuggageDepositLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LuggageDepositLineSvg}></AntdIcon>;
};

LuggageDepositLine.displayName = 'LuggageDepositLine';
LuggageDepositLine.inheritAttrs = false;
export default LuggageDepositLine;