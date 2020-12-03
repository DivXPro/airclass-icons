// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VimeoLineSvg from '@airclass/icons-svg/lib/asn/VimeoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VimeoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VimeoLineSvg}></AntdIcon>;
};

VimeoLine.displayName = 'VimeoLine';
VimeoLine.inheritAttrs = false;
export default VimeoLine;