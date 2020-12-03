// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderAddLineSvg from '@airclass/icons-svg/lib/asn/FolderAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddLineSvg}></AntdIcon>;
};

FolderAddLine.displayName = 'FolderAddLine';
FolderAddLine.inheritAttrs = false;
export default FolderAddLine;