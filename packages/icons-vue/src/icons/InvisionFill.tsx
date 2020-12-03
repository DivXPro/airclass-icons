// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InvisionFillSvg from '@airclass/icons-svg/lib/asn/InvisionFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InvisionFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InvisionFillSvg}></AntdIcon>;
};

InvisionFill.displayName = 'InvisionFill';
InvisionFill.inheritAttrs = false;
export default InvisionFill;