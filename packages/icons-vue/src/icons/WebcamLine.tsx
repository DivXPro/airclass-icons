// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WebcamLineSvg from '@airclass/icons-svg/lib/asn/WebcamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WebcamLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WebcamLineSvg}></AntdIcon>;
};

WebcamLine.displayName = 'WebcamLine';
WebcamLine.inheritAttrs = false;
export default WebcamLine;