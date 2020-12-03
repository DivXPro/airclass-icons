// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlantLineSvg from '@airclass/icons-svg/lib/asn/PlantLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlantLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlantLineSvg}></AntdIcon>;
};

PlantLine.displayName = 'PlantLine';
PlantLine.inheritAttrs = false;
export default PlantLine;