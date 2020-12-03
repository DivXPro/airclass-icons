// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GuideFillSvg from '@airclass/icons-svg/lib/asn/GuideFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GuideFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GuideFillSvg}></AntdIcon>;
};

GuideFill.displayName = 'GuideFill';
GuideFill.inheritAttrs = false;
export default GuideFill;