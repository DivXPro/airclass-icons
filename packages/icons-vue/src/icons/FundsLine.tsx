// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FundsLineSvg from '@airclass/icons-svg/lib/asn/FundsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundsLineSvg}></AntdIcon>;
};

FundsLine.displayName = 'FundsLine';
FundsLine.inheritAttrs = false;
export default FundsLine;