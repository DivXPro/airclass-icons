// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraOffLineSvg from '@airclass/icons-svg/lib/asn/CameraOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraOffLineSvg}></AntdIcon>;
};

CameraOffLine.displayName = 'CameraOffLine';
CameraOffLine.inheritAttrs = false;
export default CameraOffLine;