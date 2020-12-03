// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BlazeFillSvg from '@airclass/icons-svg/lib/asn/BlazeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlazeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlazeFillSvg}></AntdIcon>;
};

BlazeFill.displayName = 'BlazeFill';
BlazeFill.inheritAttrs = false;
export default BlazeFill;