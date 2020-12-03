// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileHistoryFillSvg from '@airclass/icons-svg/lib/asn/FileHistoryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileHistoryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileHistoryFillSvg}></AntdIcon>;
};

FileHistoryFill.displayName = 'FileHistoryFill';
FileHistoryFill.inheritAttrs = false;
export default FileHistoryFill;