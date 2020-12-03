// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTextFillSvg from '@airclass/icons-svg/lib/asn/FileTextFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextFillSvg}></AntdIcon>;
};

FileTextFill.displayName = 'FileTextFill';
FileTextFill.inheritAttrs = false;
export default FileTextFill;