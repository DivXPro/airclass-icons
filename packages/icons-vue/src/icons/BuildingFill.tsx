// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BuildingFillSvg from '@airclass/icons-svg/lib/asn/BuildingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingFillSvg}></AntdIcon>;
};

BuildingFill.displayName = 'BuildingFill';
BuildingFill.inheritAttrs = false;
export default BuildingFill;