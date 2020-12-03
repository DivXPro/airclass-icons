// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCopy2LineSvg from '@airclass/icons-svg/lib/asn/FileCopy2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCopy2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCopy2LineSvg}></AntdIcon>;
};

FileCopy2Line.displayName = 'FileCopy2Line';
FileCopy2Line.inheritAttrs = false;
export default FileCopy2Line;