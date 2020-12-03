// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileAddFillSvg from '@airclass/icons-svg/lib/asn/FileAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileAddFillSvg}></AntdIcon>;
};

FileAddFill.displayName = 'FileAddFill';
FileAddFill.inheritAttrs = false;
export default FileAddFill;