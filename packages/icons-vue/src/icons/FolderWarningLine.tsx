// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderWarningLineSvg from '@airclass/icons-svg/lib/asn/FolderWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderWarningLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderWarningLineSvg}></AntdIcon>;
};

FolderWarningLine.displayName = 'FolderWarningLine';
FolderWarningLine.inheritAttrs = false;
export default FolderWarningLine;