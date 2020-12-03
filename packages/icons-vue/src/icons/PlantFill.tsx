// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlantFillSvg from '@airclass/icons-svg/lib/asn/PlantFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlantFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlantFillSvg}></AntdIcon>;
};

PlantFill.displayName = 'PlantFill';
PlantFill.inheritAttrs = false;
export default PlantFill;