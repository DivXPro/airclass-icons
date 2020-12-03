// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderChartLineSvg from '@airclass/icons-svg/lib/asn/FolderChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderChartLineSvg}></AntdIcon>;
};

FolderChartLine.displayName = 'FolderChartLine';
FolderChartLine.inheritAttrs = false;
export default FolderChartLine;