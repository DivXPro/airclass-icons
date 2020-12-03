// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicFillSvg from '@airclass/icons-svg/lib/asn/MicFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicFillSvg}></AntdIcon>;
};

MicFill.displayName = 'MicFill';
MicFill.inheritAttrs = false;
export default MicFill;