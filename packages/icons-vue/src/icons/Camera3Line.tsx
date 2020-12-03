// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Camera3LineSvg from '@airclass/icons-svg/lib/asn/Camera3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Camera3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Camera3LineSvg}></AntdIcon>;
};

Camera3Line.displayName = 'Camera3Line';
Camera3Line.inheritAttrs = false;
export default Camera3Line;