// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileLockFillSvg from '@airclass/icons-svg/lib/asn/FileLockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileLockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileLockFillSvg}></AntdIcon>;
};

FileLockFill.displayName = 'FileLockFill';
FileLockFill.inheritAttrs = false;
export default FileLockFill;