// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VimeoFillSvg from '@airclass/icons-svg/lib/asn/VimeoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VimeoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VimeoFillSvg}></AntdIcon>;
};

VimeoFill.displayName = 'VimeoFill';
VimeoFill.inheritAttrs = false;
export default VimeoFill;