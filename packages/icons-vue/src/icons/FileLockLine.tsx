// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileLockLineSvg from '@airclass/icons-svg/lib/asn/FileLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileLockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileLockLineSvg}></AntdIcon>;
};

FileLockLine.displayName = 'FileLockLine';
FileLockLine.inheritAttrs = false;
export default FileLockLine;