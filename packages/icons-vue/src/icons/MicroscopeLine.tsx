// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicroscopeLineSvg from '@airclass/icons-svg/lib/asn/MicroscopeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicroscopeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeLineSvg}></AntdIcon>;
};

MicroscopeLine.displayName = 'MicroscopeLine';
MicroscopeLine.inheritAttrs = false;
export default MicroscopeLine;