// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlagFillSvg from '@airclass/icons-svg/lib/asn/FlagFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagFillSvg}></AntdIcon>;
};

FlagFill.displayName = 'FlagFill';
FlagFill.inheritAttrs = false;
export default FlagFill;