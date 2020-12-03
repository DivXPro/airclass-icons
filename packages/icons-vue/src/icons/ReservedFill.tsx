// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReservedFillSvg from '@airclass/icons-svg/lib/asn/ReservedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReservedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReservedFillSvg}></AntdIcon>;
};

ReservedFill.displayName = 'ReservedFill';
ReservedFill.inheritAttrs = false;
export default ReservedFill;