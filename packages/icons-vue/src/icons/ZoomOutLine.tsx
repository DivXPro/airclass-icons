// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZoomOutLineSvg from '@airclass/icons-svg/lib/asn/ZoomOutLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomOutLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZoomOutLineSvg}></AntdIcon>;
};

ZoomOutLine.displayName = 'ZoomOutLine';
ZoomOutLine.inheritAttrs = false;
export default ZoomOutLine;