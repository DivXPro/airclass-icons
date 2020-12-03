// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Camera2LineSvg from '@airclass/icons-svg/lib/asn/Camera2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Camera2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Camera2LineSvg}></AntdIcon>;
};

Camera2Line.displayName = 'Camera2Line';
Camera2Line.inheritAttrs = false;
export default Camera2Line;