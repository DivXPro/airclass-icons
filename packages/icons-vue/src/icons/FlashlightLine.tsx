// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlashlightLineSvg from '@airclass/icons-svg/lib/asn/FlashlightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlashlightLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashlightLineSvg}></AntdIcon>;
};

FlashlightLine.displayName = 'FlashlightLine';
FlashlightLine.inheritAttrs = false;
export default FlashlightLine;