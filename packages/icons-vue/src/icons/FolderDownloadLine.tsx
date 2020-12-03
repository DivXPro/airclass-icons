// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderDownloadLineSvg from '@airclass/icons-svg/lib/asn/FolderDownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderDownloadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderDownloadLineSvg}></AntdIcon>;
};

FolderDownloadLine.displayName = 'FolderDownloadLine';
FolderDownloadLine.inheritAttrs = false;
export default FolderDownloadLine;