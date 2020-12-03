// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderChartFillSvg from '@airclass/icons-svg/lib/asn/FolderChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderChartFillSvg}></AntdIcon>;
};

FolderChartFill.displayName = 'FolderChartFill';
FolderChartFill.inheritAttrs = false;
export default FolderChartFill;