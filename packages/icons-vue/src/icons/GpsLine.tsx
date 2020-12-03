// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GpsLineSvg from '@airclass/icons-svg/lib/asn/GpsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GpsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsLineSvg}></AntdIcon>;
};

GpsLine.displayName = 'GpsLine';
GpsLine.inheritAttrs = false;
export default GpsLine;