// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ToggleFillSvg from '@airclass/icons-svg/lib/asn/ToggleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToggleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleFillSvg}></AntdIcon>;
};

ToggleFill.displayName = 'ToggleFill';
ToggleFill.inheritAttrs = false;
export default ToggleFill;