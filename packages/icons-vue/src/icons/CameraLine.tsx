// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraLineSvg from '@airclass/icons-svg/lib/asn/CameraLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraLineSvg}></AntdIcon>;
};

CameraLine.displayName = 'CameraLine';
CameraLine.inheritAttrs = false;
export default CameraLine;