// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileChartLineSvg from '@airclass/icons-svg/lib/asn/FileChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileChartLineSvg}></AntdIcon>;
};

FileChartLine.displayName = 'FileChartLine';
FileChartLine.inheritAttrs = false;
export default FileChartLine;