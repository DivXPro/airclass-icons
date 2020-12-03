// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FullscreenLineSvg from '@airclass/icons-svg/lib/asn/FullscreenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullscreenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FullscreenLineSvg}></AntdIcon>;
};

FullscreenLine.displayName = 'FullscreenLine';
FullscreenLine.inheritAttrs = false;
export default FullscreenLine;