// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderLineSvg from '@airclass/icons-svg/lib/asn/FolderLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderLineSvg}></AntdIcon>;
};

FolderLine.displayName = 'FolderLine';
FolderLine.inheritAttrs = false;
export default FolderLine;