// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RouteLineSvg from '@airclass/icons-svg/lib/asn/RouteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RouteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteLineSvg}></AntdIcon>;
};

RouteLine.displayName = 'RouteLine';
RouteLine.inheritAttrs = false;
export default RouteLine;