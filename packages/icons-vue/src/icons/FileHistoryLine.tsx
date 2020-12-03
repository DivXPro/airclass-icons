// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileHistoryLineSvg from '@airclass/icons-svg/lib/asn/FileHistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileHistoryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileHistoryLineSvg}></AntdIcon>;
};

FileHistoryLine.displayName = 'FileHistoryLine';
FileHistoryLine.inheritAttrs = false;
export default FileHistoryLine;