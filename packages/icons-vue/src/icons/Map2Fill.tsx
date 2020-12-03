// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Map2FillSvg from '@airclass/icons-svg/lib/asn/Map2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Map2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map2FillSvg}></AntdIcon>;
};

Map2Fill.displayName = 'Map2Fill';
Map2Fill.inheritAttrs = false;
export default Map2Fill;