// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NurseFillSvg from '@airclass/icons-svg/lib/asn/NurseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NurseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NurseFillSvg}></AntdIcon>;
};

NurseFill.displayName = 'NurseFill';
NurseFill.inheritAttrs = false;
export default NurseFill;