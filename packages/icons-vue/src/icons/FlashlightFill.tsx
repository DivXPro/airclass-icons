// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlashlightFillSvg from '@airclass/icons-svg/lib/asn/FlashlightFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlashlightFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashlightFillSvg}></AntdIcon>;
};

FlashlightFill.displayName = 'FlashlightFill';
FlashlightFill.inheritAttrs = false;
export default FlashlightFill;