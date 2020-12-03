// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Upload2LineSvg from '@airclass/icons-svg/lib/asn/Upload2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Upload2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Upload2LineSvg}></AntdIcon>;
};

Upload2Line.displayName = 'Upload2Line';
Upload2Line.inheritAttrs = false;
export default Upload2Line;