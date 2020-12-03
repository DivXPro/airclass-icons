// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GhostFillSvg from '@airclass/icons-svg/lib/asn/GhostFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GhostFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostFillSvg}></AntdIcon>;
};

GhostFill.displayName = 'GhostFill';
GhostFill.inheritAttrs = false;
export default GhostFill;