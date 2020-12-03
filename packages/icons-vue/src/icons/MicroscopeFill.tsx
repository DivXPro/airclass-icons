// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicroscopeFillSvg from '@airclass/icons-svg/lib/asn/MicroscopeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicroscopeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeFillSvg}></AntdIcon>;
};

MicroscopeFill.displayName = 'MicroscopeFill';
MicroscopeFill.inheritAttrs = false;
export default MicroscopeFill;