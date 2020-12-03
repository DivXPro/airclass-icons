// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RouteFillSvg from '@airclass/icons-svg/lib/asn/RouteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RouteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteFillSvg}></AntdIcon>;
};

RouteFill.displayName = 'RouteFill';
RouteFill.inheritAttrs = false;
export default RouteFill;