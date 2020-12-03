// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FundsBoxLineSvg from '@airclass/icons-svg/lib/asn/FundsBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundsBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundsBoxLineSvg}></AntdIcon>;
};

FundsBoxLine.displayName = 'FundsBoxLine';
FundsBoxLine.inheritAttrs = false;
export default FundsBoxLine;