// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileWarningFillSvg from '@airclass/icons-svg/lib/asn/FileWarningFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWarningFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWarningFillSvg}></AntdIcon>;
};

FileWarningFill.displayName = 'FileWarningFill';
FileWarningFill.inheritAttrs = false;
export default FileWarningFill;