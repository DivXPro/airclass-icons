// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileMarkFillSvg from '@airclass/icons-svg/lib/asn/FileMarkFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileMarkFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileMarkFillSvg}></AntdIcon>;
};

FileMarkFill.displayName = 'FileMarkFill';
FileMarkFill.inheritAttrs = false;
export default FileMarkFill;