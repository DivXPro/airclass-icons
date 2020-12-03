// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BuildingLineSvg from '@airclass/icons-svg/lib/asn/BuildingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingLineSvg}></AntdIcon>;
};

BuildingLine.displayName = 'BuildingLine';
BuildingLine.inheritAttrs = false;
export default BuildingLine;