// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderZipLineSvg from '@airclass/icons-svg/lib/asn/FolderZipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderZipLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderZipLineSvg}></AntdIcon>;
};

FolderZipLine.displayName = 'FolderZipLine';
FolderZipLine.inheritAttrs = false;
export default FolderZipLine;