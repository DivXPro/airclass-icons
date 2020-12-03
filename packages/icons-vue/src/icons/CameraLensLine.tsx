// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraLensLineSvg from '@airclass/icons-svg/lib/asn/CameraLensLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraLensLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraLensLineSvg}></AntdIcon>;
};

CameraLensLine.displayName = 'CameraLensLine';
CameraLensLine.inheritAttrs = false;
export default CameraLensLine;