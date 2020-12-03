// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkipForwardLineSvg from '@airclass/icons-svg/lib/asn/SkipForwardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkipForwardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkipForwardLineSvg}></AntdIcon>;
};

SkipForwardLine.displayName = 'SkipForwardLine';
SkipForwardLine.inheritAttrs = false;
export default SkipForwardLine;