// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZoomInLineSvg from '@airclass/icons-svg/lib/asn/ZoomInLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomInLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZoomInLineSvg}></AntdIcon>;
};

ZoomInLine.displayName = 'ZoomInLine';
ZoomInLine.inheritAttrs = false;
export default ZoomInLine;