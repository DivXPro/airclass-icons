// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraLensFillSvg from '@airclass/icons-svg/lib/asn/CameraLensFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraLensFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraLensFillSvg}></AntdIcon>;
};

CameraLensFill.displayName = 'CameraLensFill';
CameraLensFill.inheritAttrs = false;
export default CameraLensFill;