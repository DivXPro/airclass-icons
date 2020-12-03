// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Map2LineSvg from '@airclass/icons-svg/lib/asn/Map2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Map2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map2LineSvg}></AntdIcon>;
};

Map2Line.displayName = 'Map2Line';
Map2Line.inheritAttrs = false;
export default Map2Line;