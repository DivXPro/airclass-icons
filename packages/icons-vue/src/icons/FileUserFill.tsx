// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileUserFillSvg from '@airclass/icons-svg/lib/asn/FileUserFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUserFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUserFillSvg}></AntdIcon>;
};

FileUserFill.displayName = 'FileUserFill';
FileUserFill.inheritAttrs = false;
export default FileUserFill;