// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AirplayFillSvg from '@airclass/icons-svg/lib/asn/AirplayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AirplayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplayFillSvg}></AntdIcon>;
};

AirplayFill.displayName = 'AirplayFill';
AirplayFill.inheritAttrs = false;
export default AirplayFill;