// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import File2LineSvg from '@airclass/icons-svg/lib/asn/File2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const File2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={File2LineSvg}></AntdIcon>;
};

File2Line.displayName = 'File2Line';
File2Line.inheritAttrs = false;
export default File2Line;