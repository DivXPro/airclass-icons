// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TruckLineSvg from '@airclass/icons-svg/lib/asn/TruckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TruckLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckLineSvg}></AntdIcon>;
};

TruckLine.displayName = 'TruckLine';
TruckLine.inheritAttrs = false;
export default TruckLine;