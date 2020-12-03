// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InvisionLineSvg from '@airclass/icons-svg/lib/asn/InvisionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InvisionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InvisionLineSvg}></AntdIcon>;
};

InvisionLine.displayName = 'InvisionLine';
InvisionLine.inheritAttrs = false;
export default InvisionLine;