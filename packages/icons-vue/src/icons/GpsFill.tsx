// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GpsFillSvg from '@airclass/icons-svg/lib/asn/GpsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GpsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsFillSvg}></AntdIcon>;
};

GpsFill.displayName = 'GpsFill';
GpsFill.inheritAttrs = false;
export default GpsFill;