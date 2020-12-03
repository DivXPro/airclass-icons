// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScreenshotFillSvg from '@airclass/icons-svg/lib/asn/ScreenshotFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScreenshotFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenshotFillSvg}></AntdIcon>;
};

ScreenshotFill.displayName = 'ScreenshotFill';
ScreenshotFill.inheritAttrs = false;
export default ScreenshotFill;