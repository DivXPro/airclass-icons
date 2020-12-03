// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WebcamFillSvg from '@airclass/icons-svg/lib/asn/WebcamFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WebcamFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WebcamFillSvg}></AntdIcon>;
};

WebcamFill.displayName = 'WebcamFill';
WebcamFill.inheritAttrs = false;
export default WebcamFill;