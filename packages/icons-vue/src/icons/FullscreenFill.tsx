// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FullscreenFillSvg from '@airclass/icons-svg/lib/asn/FullscreenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullscreenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FullscreenFillSvg}></AntdIcon>;
};

FullscreenFill.displayName = 'FullscreenFill';
FullscreenFill.inheritAttrs = false;
export default FullscreenFill;