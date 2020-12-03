// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FullscreenExitLineSvg from '@airclass/icons-svg/lib/asn/FullscreenExitLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullscreenExitLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FullscreenExitLineSvg}></AntdIcon>;
};

FullscreenExitLine.displayName = 'FullscreenExitLine';
FullscreenExitLine.inheritAttrs = false;
export default FullscreenExitLine;