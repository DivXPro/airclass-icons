// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileSearchFillSvg from '@airclass/icons-svg/lib/asn/FileSearchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSearchFillSvg}></AntdIcon>;
};

FileSearchFill.displayName = 'FileSearchFill';
FileSearchFill.inheritAttrs = false;
export default FileSearchFill;