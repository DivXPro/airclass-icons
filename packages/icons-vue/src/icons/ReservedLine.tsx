// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReservedLineSvg from '@airclass/icons-svg/lib/asn/ReservedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReservedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReservedLineSvg}></AntdIcon>;
};

ReservedLine.displayName = 'ReservedLine';
ReservedLine.inheritAttrs = false;
export default ReservedLine;