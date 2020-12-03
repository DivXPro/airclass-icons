// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileChartFillSvg from '@airclass/icons-svg/lib/asn/FileChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileChartFillSvg}></AntdIcon>;
};

FileChartFill.displayName = 'FileChartFill';
FileChartFill.inheritAttrs = false;
export default FileChartFill;