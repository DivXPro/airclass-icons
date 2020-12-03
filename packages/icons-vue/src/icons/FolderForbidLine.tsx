// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderForbidLineSvg from '@airclass/icons-svg/lib/asn/FolderForbidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderForbidLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderForbidLineSvg}></AntdIcon>;
};

FolderForbidLine.displayName = 'FolderForbidLine';
FolderForbidLine.inheritAttrs = false;
export default FolderForbidLine;