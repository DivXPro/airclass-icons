// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicOffFillSvg from '@airclass/icons-svg/lib/asn/MicOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicOffFillSvg}></AntdIcon>;
};

MicOffFill.displayName = 'MicOffFill';
MicOffFill.inheritAttrs = false;
export default MicOffFill;