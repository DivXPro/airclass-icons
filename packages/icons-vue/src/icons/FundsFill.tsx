// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FundsFillSvg from '@airclass/icons-svg/lib/asn/FundsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundsFillSvg}></AntdIcon>;
};

FundsFill.displayName = 'FundsFill';
FundsFill.inheritAttrs = false;
export default FundsFill;