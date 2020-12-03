// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AirplayLineSvg from '@airclass/icons-svg/lib/asn/AirplayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AirplayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplayLineSvg}></AntdIcon>;
};

AirplayLine.displayName = 'AirplayLine';
AirplayLine.inheritAttrs = false;
export default AirplayLine;