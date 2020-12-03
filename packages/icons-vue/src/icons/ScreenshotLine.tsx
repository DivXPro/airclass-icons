// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScreenshotLineSvg from '@airclass/icons-svg/lib/asn/ScreenshotLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScreenshotLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenshotLineSvg}></AntdIcon>;
};

ScreenshotLine.displayName = 'ScreenshotLine';
ScreenshotLine.inheritAttrs = false;
export default ScreenshotLine;