// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileEditFillSvg from '@airclass/icons-svg/lib/asn/FileEditFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileEditFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileEditFillSvg}></AntdIcon>;
};

FileEditFill.displayName = 'FileEditFill';
FileEditFill.inheritAttrs = false;
export default FileEditFill;